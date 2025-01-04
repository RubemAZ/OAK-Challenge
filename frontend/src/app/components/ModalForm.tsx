// components/ModalForm.tsx
'use client';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import React from 'react';

const MySwal = withReactContent(Swal);

const ModalForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
    const openModal = () => {
        MySwal.fire({
            title: 'Cadastrar Produto',
            html: `
        <input id="name" class="swal2-input" placeholder="Nome do produto" />
        <textarea id="description" class="swal2-textarea" placeholder="Descrição"></textarea>
        <input id="price" type="number" class="swal2-input" placeholder="Valor do produto" />
        <select id="available" class="swal2-select">
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
      `,
            showCancelButton: true,
            confirmButtonText: 'Salvar',
            preConfirm: () => {
                const name = (document.getElementById('name') as HTMLInputElement).value;
                const description = (document.getElementById('description') as HTMLTextAreaElement).value;
                const price = parseFloat((document.getElementById('price') as HTMLInputElement).value);
                const available = (document.getElementById('available') as HTMLSelectElement).value === 'true';

                if (!name || !description || isNaN(price)) {
                    Swal.showValidationMessage('Por favor, preencha todos os campos corretamente.');
                    return null;
                }

                return { name, description, price, available };
            },
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                onSubmit(result.value);
                Swal.fire('Sucesso!', 'Produto cadastrado com sucesso.', 'success');
            }
        });
    };

    return (
        <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded">
            Adicionar Produto
        </button>
    );
};

export default ModalForm;
