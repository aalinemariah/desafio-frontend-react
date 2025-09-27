import { leaf } from 'lucide-react';

const ProductCard = ({ id, nome, imagem, preço, vageno }) => {
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
        </a>
    );
};