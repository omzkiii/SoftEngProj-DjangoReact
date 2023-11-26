import React, { useState } from 'react';
import Modal from '@/components/Modal';

const InventoryReport = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedItem, setEditedItem] = useState(null);

  const items = [
    {
      productImg: '/kamotePic.jpg',
      name: 'Kamote',
      qty: 54,
      price: '120/kg',
      //Use "\n" to indicate a new line, use back ticks for new lines too.
      description: 
      `
     
      Price: 120/kg<br>
      Quantity: 54kg <br>    -----------------------  <br>

      This Kamote has been harvested in the grenest fields of Batanes <br>
      Handpicked and fertilized from the farmers that brought joy to the land. <br>
      Taste the freshest and organic sweet potato refined by filipinos, for the nationhood! <br>
       `
    },
    {
      productImg: '/chickenBreastPic.jpg',
      name: 'Chicken Breast',
      qty: 62,
      price: '170/kg',
      description: 
      `Price: 170/kg <br>
      quantity: 62 kg <br>
      Chicken breast from the green field of Central Luzon where chickens are fed  <br>
      with organic and healthy feeds. Taste the delicate poultry of the north now with AgriAccess!
       `,
    },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  

// Function to handle edits and update the items array
const handleEdit = () => {
  if (editedItem) {
    const updatedItems = items.map((item, index) => {
      if (index === editedItem.index) {
        return editedItem.editedData;
      }
      return item;
    });

    setItems(updatedItems);
    setShowModal(false); // Close the modal after editing
  }
};
  // Function to open the edit modal with the selected item's details
   // Function to open the edit modal with the selected item's details
   const openEditModal = (item, index) => {
    setEditedItem({ editedData: { ...item }, index });
    setShowModal(true);
  };

  return (
    <div>
      <div className="text-center font-serif color text-amber-400 m-4 text-4xl font-extrabold">
        <h2> INVENTORY </h2>
      </div>

      <div className="overflow-x-auto text-black">
        <table className="min-w-full">
          <thead>
            <tr className="text-center bg-amber-400 font-extrabold font-serif text-2xl">
              <th className="text-center">PRODUCT</th>
              <th className="text-center">PRODUCT NAME</th>
              <th className="text-center">QUANTITY</th>
              <th className="text-center">PRICE</th>
              <th className="text-center">OPERATION</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="py-4 text-center items-center">
                <td className="align-middle text-center items-center cursor-pointer"> 
                  <img 
                    src={item.productImg}
                    alt={item.name}
                    width={100}
                    height={100}
                    onClick={() => openModal(item)}
                    
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  <div className="flex items-center justify-center">
                    <button className="border font-bold border-white rounded-full w-8 h-8 bg-transparent text-green-500 hover:bg-green-100">
                      -
                    </button>
                    <span className="mx-2">{item.qty}</span>
                    <button className="border font-bold border-white  w-8 h-8 bg-transparent text-green-500 hover:bg-green-100">
                      +
                    </button>
                  </div>
              </td>
              <td>
                {item.price}
              </td>
                
              <td className="items-center">
                <div className="space-x-2">
                  <button onClick={() => openEditModal(item, index)} className="px-2 py-1 bg-green-400 text-white rounded">Update</button>
                  <button className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                </div>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for the Description of the product */}
      {selectedItem && (
        <Modal isOpen={showModal} closeModal={closeModal}>
          <div className="bg-green-500 text-white rounded-lg shadow-lg p-4 text-center">
            <div className='text-center'>
              <h1>{selectedItem.name}</h1>
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
        <Modal isOpen={showModal} closeModal={() => setShowModal(false)}>
          {/* Render an edit form with inputs for the item details */}
          <div>
            {/* Inputs to edit the item details */}
            {/* ... */}
            <button onClick={handleEdit}>Save Changes</button>
          </div>
        </Modal>
)}

    </div>
  );
};

export default InventoryReport;
