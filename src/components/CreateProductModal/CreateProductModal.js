import React, { useState } from 'react'
import Modal from 'react-modal'
import classes from './CreateProductModal.module.css'
import { random } from 'faker'

// productname instead of name
// no image present
// quantity is string
// user can push empty objects

export const CreateProductModal = ({ isModalOpen, toggleModal }) => {
  const [formState, setFormState] = useState({
    id: random.uuid(),
    name: '',
    description: '',
    price: null,
    quantity: null,
    image: ''
  })

  const inputChangeHandler = (formStateKey, event) =>
    setFormState({
      ...formState,
      [formStateKey]: event.target.value
    })

  const generateDescriptionHandler = event => {
    event.preventDefault()
    setFormState({
      ...formState,
      description: random.words(250)
    })
  }

  const validate = () => {
    let isFormValid = true
    if (!formState.name || formState.name.length < 5) {
      isFormValid = false
    }
    return isFormValid
  }

  const formSubmitHandler = async event => {
    event.preventDefault()
    if (validate()) {
      const response = await fetch('http://localhost:4000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      })
    } else {
      alert('oh oh')
    }
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
      ariaHideApp={false}
    >
      <h2 className={classes.heading}>Create Product</h2>
      <form action='' onSubmit={formSubmitHandler}>
        <div className={classes.formControl}>
          <label htmlFor='name'>Product Name</label>
          <input
            type='text'
            id='name'
            value={formState.name}
            onChange={event => inputChangeHandler('name', event)}
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor='description'>Description</label>
          <textarea
            type='text'
            id='description'
            rows='4'
            value={formState.description}
            onChange={event =>
              setFormState({
                ...formState,
                description: event.target.value
              })
            }
          ></textarea>
          <button onClick={generateDescriptionHandler}>
            Generate description
          </button>
        </div>
        <div className={classes.formControl}>
          <label htmlFor='price'>Price</label>
          <input
            type='text'
            id='price'
            value={formState.price}
            onChange={event =>
              setFormState({
                ...formState,
                price: event.target.value
              })
            }
          />
        </div>
        <div className={classes.formControl}>
          <label htmlFor='quantity'>Quantity</label>
          <input
            type='text'
            id='quantity'
            value={formState.quantity}
            onChange={event =>
              setFormState({
                ...formState,
                quantity: event.target.value
              })
            }
          />
        </div>
        <div className={classes.buttonList}>
          <button>Cancel</button>
          <button>Create</button>
        </div>
      </form>
    </Modal>
  )
}
