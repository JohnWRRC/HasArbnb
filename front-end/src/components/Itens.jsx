// src/components/Itens.jsx

// Usando '../' para subir da pasta 'components' para a pasta 'src'
import minhaImagem from "/public/2bdf8f95-8b2d-498f-8b5e-e944c3467f2b-1741531107852.jpeg";

function Itens() {
  return (
    <a href="/" className="flex flex-col gap-3">
      <img
        src={minhaImagem} // Use a variável importada
        alt="Acomodação"
        className="aspect-square object-cover rounded-2xl"
      />
      <div>
            <h3 className="font-semibold text-xl">Cabo Frio, Rio de Janeiro</h3>
      </div>
        <p className="truncate text-gray-600">
            Casa aconchegante com vista para o mar, 3 quartos, piscina e Wi-Fi.
            Saiba mais
        </p>

    </a>
  );
}

export default Itens;
