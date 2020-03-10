import React, { Component } from 'react'
import Product from '../../components/Product'
import { Flex } from '../../components/Shared/Flex/Flex'
import classes from './Products.module.css'
import { CreateProductModal } from '../../components/CreateProductModal/CreateProductModal'

export default class ProductsPage extends Component {
  state = {
    products: [],
    isModalOpen: false
  }
  componentDidMount() {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:4000/products')
      const products = await response.json()
      this.setState({ products })
    }
    fetchProducts()
  }

  toggleModalHandler = () =>
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }))

  render() {
    const { products, isModalOpen } = this.state
    return (
      <>
        <div className={classes.buttonWrapper}>
          <button onClick={this.toggleModalHandler}>Create product</button>
        </div>
        <Flex className='container' justify='space-between' wrap='wrap'>
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </Flex>
        <CreateProductModal
          isModalOpen={isModalOpen}
          toggleModal={this.toggleModalHandler}
        ></CreateProductModal>
      </>
    )
  }
}
