const Table = ({ products }: { products: any[] }) => {
    if (products.length === 0) {
        return <p className="text-center text-gray-500">Nenhum produto cadastrado.</p>;
    }

    return (
        <table className="min-w-full bg-white border border-gray-300 rounded-md">
            <thead>
            <tr>
                <th className="border px-4 py-2 text-left">Nome</th>
                <th className="border px-4 py-2 text-left">Descrição</th>
                <th className="border px-4 py-2 text-right">Valor</th>
                <th className="border px-4 py-2 text-center">Disponível</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product) => (
                <tr key={product.id}>
                    <td className="border px-4 py-2">{product.name}</td>
                    <td className="border px-4 py-2">{product.description}</td>
                    <td className="border px-4 py-2 text-right">R$ {product.price.toFixed(2)}</td>
                    <td className="border px-4 py-2 text-center">{product.available ? 'Sim' : 'Não'}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
