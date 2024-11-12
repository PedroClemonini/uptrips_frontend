import React, {useState} from "react";
// import api from './Api.js'; 
import Header from './header.js';
import Package from './package.js';
import New_package from './newPackage.js';


const ManagerView = () =>{
const [showModal, setShowModal] = useState(false);
  var cancel;
  // console.log(cancel);
  
  // Função para abrir o modal
  const openModal = () => {
    document.querySelector(".new_package_section").style.display = "flex";
    document.querySelector(".package_section").style.filter = "blur(5px)";
    document.querySelector(".header").style.filter = "blur(5px)";
    // cancel = document.querySelector("button.cancel");
    setShowModal(true);
  };
  
  // Função para fechar o modal
  const closeModal = () => {
    document.querySelector(".new_package_section").style.display = "none";
    document.querySelector(".package_section").style.filter = "blur(0px)";
    document.querySelector(".header").style.filter = "blur(0px)";
    setShowModal(false);
  };

  return(
    <div className="App">
      <Header user="admin"></Header>
      <section class="package_section">
        <Package onClick={openModal}></Package>
        <Package image="#" title="Ilha Bela" price="R$500,00"></Package>
        <Package image="#" title="Guarulhos" price="R$100,00"></Package>
        <Package image="#" title="Rio de Janeiro" price="R$200,00"></Package>
        <Package image="#" title="Praias" price="R$900,00"></Package>
        <Package image="#" title="Holambra" price="R$400,00"></Package>
        <Package image="#" title="Campos do Jordão" price="R$1200,00"></Package>
        <Package image="#" title="Natal" price="R$300,00"></Package>
        <Package image="#" title="São Paulo" price="R$200,00"></Package>

      </section>
      <section class="new_package_section">
        {showModal && (
          <New_package></New_package>
        )}
      </section>
    </div>
  );
}
    export default ManagerView;

