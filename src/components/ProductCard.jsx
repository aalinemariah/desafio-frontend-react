import React from 'react';
import PlantImage from '/src/assets/Plant.png';
import CowImage from '../assets/Cow.png'


const ProductCard = ({ id, nome, imagem, preço, vegano }) => {
    const formatPrice = (priceInCents) => {
        return (priceInCents / 100).toLocaleString('pt-br', {
            style: "currency",
            currency: "BRL",
        });
    };

    return (
<a
    href={`/product/${id}`}
    className="products__list--item block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
>
    <div className="relative">
        <img
            src={`/src/assets/${imagem}`}
            alt={nome}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
    </div>
    <h3 className="products__list--price">
        R$ {formatarPreco(preco.por)}{" "}
        {preco.de > preco.por && <span>R$ {formatarPreco(preco.de)}</span>}
    </h3>
    <h4 className="products__list--name">{nome}</h4>
    {vegano && (
        <div className="product__tag">
            <img src={PlantImage} alt="planta" />
            <span>Vegano</span>
        </div>
       

        
    )}
</a>
    );}



export default ProductCard;
           