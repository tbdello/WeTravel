import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { loadGallery, deleteImg } from '../utils/actions';
import imgApi from '../utils/services/imgApi';


export default class Gallery extends PureComponent {
  

  async componentDidMount() {
    const img = await imgApi.get();
    const newState = loadGallery(this.state, img);
    this.setState(newState);
  }

  handleDelete = async id => {
    await imgApi.remove(id);
    const newState = deleteImg(this.state, id);
    this.setState(newState);
  }


  

  