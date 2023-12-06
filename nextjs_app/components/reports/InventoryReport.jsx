import React, { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import { useLoggedInContext } from '@/contexts/LoggedInContext';
import axios from 'axios';

const InventoryReport = () => {
  const { products, fetchProducts, user } = useLoggedInContext();

  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [editedItem, setEditedItem] = useState(null);
 
  //TEST OPEN CLOSE MODALS FOR DESCRIPTION 
  const [isDescriptionModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    showDescriptionModalDescriptionModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //CURRENT MODALS FOR DESCRIPTION
  const openDescriptionModal = (item) => {
    setSelectedItem(item);
    setShowDescriptionModal(true); // Use setShowDescriptionModal to control the description modal
  };

  const closeDescriptionModal = () => {
    setShowDescriptionModal(false); //Close description modal using setShowDescriptionModal
    setSelectedItem(null);
  };
  
  const handleAdd = () => {
      console.log(products)
  }

  
   // Function to open the edit modal with the selected item's details
  const openEditModal = (item, index) => {
    setEditedItem({ editedData: { ...item }, index });
    setShowUpdateModal(true);
    setSelectedItem(item); // Set the selected item for displaying the image in the update modal
  };

  const updateProducts = (productId, productQty, productPrice) => {
    const productData = {
      "quantity": productQty,
      "product": productPrice
    }
    try {
      // const response = axios.patch(`http://127.0.0.1:8000/api/products/update/${productId}`,productData,{
      //   headers: {
      //   'Content-Type': 'application/json',
      //   'Authorization': 'Token ' + localStorage.getItem('token')
      // }})
      console.log("CART EDITED")
      
    } catch (error) {
      console.log("CART EDIT FAIL")
    }
  }
  const handleEdit = () => {
    //updateProducts(id, itemQty, itemPrice)
    //setShowModal(false); 
  };
  


  return (
    <div>
      <div className="text-center font-Bree  text-AgriAccessOrange m-4 text-4xl font-extrabold">
        <h2> INVENTORY </h2>
      </div>

      <div className='mb-2 flex justify-end '>
        <button className="bg-Lime font-Bree py-2 px-5 rounded-md" onClick={()=>handleAdd()}>
          Add Item
        </button>
      </div>
      <div className="overflow-x-auto text-black">
        <table className="min-w-full">
          <thead>
            <tr className="text-center bg-AgriAccessOrange  font-Bree  text-2xl">
              <th className="text-center text-white">PRODUCT</th>
              <th className="text-center text-white">PRODUCT NAME</th>
              <th className="text-center text-white">QUANTITY</th>
              <th className="text-center text-white">PRICE</th>
              <th className="text-center text-white">OPERATION</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item, index) => (
              <tr key={index} className="py-4 text-center items-center">
                <td className="align-middle text-center items-center cursor-pointer"
                onClick={() => openDescriptionModal(item)}> 
                  <img 
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="mx-auto block"
                  />
                  
                </td>
                <td>{item.name}</td>
                <td>
                  <div className="flex items-center justify-center">
                    <button className="border font-bold border-white rounded-md w-8 h-8 bg-transparent text-green-500 hover:bg-green-100">
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="border font-bold border-white  w-8 h-8 bg-transparent text-green-500 hover:bg-green-100">
                      +
                    </button>
                  </div>
              </td>
              <td>
                {item.costPerUnit}
              </td>
                
              <td className="flex justify-center">
                <div className=" flex flex-col space-y-1 ">
                  <button onClick={() => openEditModal(item, index)} className="px-2 py-1 w-20 font-Bree bg-AgriAccessGreen text-white rounded-md">Update</button>
                  <button className="px-2 py-1 w-20 bg-red-500 font-Bree text-white rounded-md">Delete</button>
                </div>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for the Description of the product */}
      {selectedItem && (
        <Modal isOpen={showDescriptionModal} closeModal={closeDescriptionModal}>
          <div className="bg-green-500 text-white rounded-md-md-lg shadow-lg p-4 text-center">
            <div className='text-center'>
              <h1>{selectedItem?.name}</h1>
            </div>
            
            {/* Part of the code that does the multi-line when \n is typed */}
            {selectedItem.description.split('<br>').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </Modal>
      )}

      {/* Modal for updating the details of the item */}
      {editedItem && (
        <Modal isOpen={showUpdateModal} closeModal={() => setShowUpdateModal(false)}> 
          
          <div className="bg-white p-5 flex items-center">  
          
            <div className="mx-5">
              <img
                    src={selectedItem?.productImg}
                    alt={selectedItem?.name}
                    width={200}
                    height={200}
                  />
            </div>
            <form id='update_form' className="flex flex-col  ">
              <h1 className="text-black m-1"> {selectedItem?.name}</h1>
              <label className="text-black m-1"> Quantity:</label>
                <input className="text-black m-1" type="text"  placeholder={selectedItem?.quantity} />
              <label className="text-black m-1">Price:</label>
                <input className="text-black m-1" type="text"  placeholder={selectedItem?.price} />
             
            <button onClick={console.log("GAGO")} className="bg-green-500 p-1 rounded-md-md-xl text-black">Save Changes</button>
            </form>
          </div>

        </Modal>
)}

    </div>
  );
};

export default InventoryReport;
