import React, { Component } from "react";
import "./App.css";
import getImages from "./Utils/api";
import Searchbar from "./components/Searchbar/searchbar";
import ImageGallery from "./components/ImageGallery/imageGallery";
import Loader from "./components/Loader/loader";
import Button from "./components/Button/button";
import Modal from "./components/Modal/modal";

export class App extends Component {
  state = {
    keyword: "",
    images: [],
    page: 1,
    webformatURL: "",
    largeImageURL: "",
    tags: "",
    isLoading: false,
    showModal: false,
    totalPages: 0,
    showButton: true,
  };

  toogleLoading = () => {
    this.setState(({ isLoading }) => ({
      isLoading: !isLoading,
    }));
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  inputValue = (e) => {
    this.setState({ keyword: e.target.value });
  };

  submitValue = (e) => {
    e.preventDefault();
    this.fetchImages();
  };

  loadMore = (e) => {
    e.preventDefault();
    this.fetchImages();
  };

  openModal = (e) => {
    this.setState(() => ({
      largeImageURL: e.target.dataset.source,
      tags: e.target.alt,
    }));
    this.toogleModal();
  };

  fetchInitialView = () => {
    fetch(
      `https://pixabay.com/api/?key=11008307-2b498b2b7ae6a379a84554860&q=&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=15`
    )
      .then((data) => data.json())
      .then((keyword) => {
        this.setState(({ images, showButton }) => ({
          images: keyword.hits,
          showButton: true,
        }));
      })
      .catch((error) => console.log(error));
  };

  fetchImages = async () => {
    if (this.state.keyword.trim() === "") {
      return alert("Please enter a value to search images");
    }
    this.toogleLoading();

    try {
      const request = await getImages(this.state.keyword, this.state.page);
      this.setState(({ images, page, showButton }) => ({
        images: [...images, ...request],
        page: page + 1,
        showButton: false,
      }));

      if (request.length === 0) {
        this.setState({
          error: `No results were found for: ${this.state.keyword}`,
        });
      }
    } catch (error) {
      this.setState({ error: "Something went wrong. Try again" });
    } finally {
      this.toogleLoading();
    }
  };

  componentDidMount() {
    this.fetchInitialView();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.keyword !== this.state.keyword) {
      this.setState({ images: [], page: 1, error: null });
    }
  }

  render() {
    return (
      <div>
        <Searchbar
          onSubmit={this.submitValue}
          inputValue={this.inputValue}
          value={this.state.keyword}
        />
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {this.state.isLoading && <Loader />}

        {!this.state.showButton &&
          !this.state.isLoading &&
          this.state.images.length >= 15 &&
          !this.state.error && (
            <Button label={"Load more"} fetchMoreImages={this.loadMore} />
          )}

        {this.state.showModal && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            tags={this.state.tags}
            toogleModal={this.toogleModal}
          />
        )}
      </div>
    );
  }
}

export default App;
