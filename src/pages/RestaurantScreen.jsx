import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, ChevronLeft, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Helmet } from 'react-helmet';

const RestaurantScreen = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Mock data - replace with API call: GET /stores/{id} and GET /stores/{id}/menu
  const estabelecimentos = {
    "1": { id: 1, nome: "Burger Palace", avaliacao: 4.8, tempoEntrega: "25-35 min", promocao: true, imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=400&fit=crop", categoria: "Hambúrguer" },
    "2": { id: 2, nome: "Pizza Suprema", avaliacao: 4.6, tempoEntrega: "30-40 min", promocao: false, imagem: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=1200&h=400&fit=crop", categoria: "Pizza" },
    "3": { id: 3, nome: "Açaí do Vale", avaliacao: 4.9, tempoEntrega: "15-25 min", promocao: true, imagem: "https://images.unsplash.com/photo-1502741138132-55c63df5a33a?w=1200&h=400&fit=crop", categoria: "Açaí" },
    "4": { id: 4, nome: "Doce Tentação", avaliacao: 4.7, tempoEntrega: "20-30 min", promocao: false, imagem: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200&h=400&fit=crop", categoria: "Doces" }
  };

  const cardapio = {
    "1": [
      { id: 101, nome: "X-Burger Clássico", descricao: "Pão, carne, queijo, alface e tomate.", preco: 22.50, imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop" },
      { id: 102, nome: "X-Bacon Especial", descricao: "Pão, carne, queijo, bacon crocante e molho especial.", preco: 28.00, imagem: "https://images.unsplash.com/photo-1596662951594-2680b2e45119?w=300&h=200&fit=crop" },
      { id: 103, nome: "Batata Frita", descricao: "Porção generosa de batatas fritas crocantes.", preco: 15.00, imagem: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=200&fit=crop" }
    ],
    "2": [
      { id: 201, nome: "Pizza de Calabresa", descricao: "Molho de tomate, mussarela e calabresa fatiada.", preco: 45.00, imagem: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=300&h=200&fit=crop" },
      { id: 202, nome: "Pizza de Frango com Catupiry", descricao: "Molho de tomate, mussarela, frango desfiado e catupiry.", preco: 52.00, imagem: "https://images.unsplash.com/photo-1566843972142-a7e67e6347a8?w=300&h=200&fit=crop" }
    ],
    "3": [
      { id: 301, nome: "Açaí na Tigela 500ml", descricao: "Açaí puro com banana, morango e granola.", preco: 25.00, imagem: "https://images.unsplash.com/photo-1575337824322-338545418624?w=300&h=200&fit=crop" }
    ],
    "4": [
      { id: 401, nome: "Fatia de Bolo de Chocolate", descricao: "Bolo fofinho com cobertura cremosa de brigadeiro.", preco: 18.00, imagem: "https://images.unsplash.com/photo-1567613794343-5a6355a53b24?w=300&h=200&fit=crop" }
    ]
  };

  const estabelecimento = estabelecimentos[id];
  const menuItens = cardapio[id] || [];

  const handleAddItem = (item) => {
    toast({
      title: `"${item.nome}" adicionado!`,
      description: "🚧 A funcionalidade do carrinho ainda não foi implementada. Solicite na próxima mensagem! 🚀",
    });
  };

  if (!estabelecimento) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold text-red-500">Restaurante não encontrado!</h1>
        <Link to="/">
          <Button className="mt-4">Voltar para o Início</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{estabelecimento.nome} - FoodApp</title>
        <meta name="description" content={`Confira o cardápio do restaurante ${estabelecimento.nome}`} />
      </Helmet>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="relative h-48 md:h-64">
          <img src={estabelecimento.imagem} alt={`Fachada do ${estabelecimento.nome}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute top-4 left-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30 text-white rounded-full">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto p-4 -mt-16">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{estabelecimento.nome}</h1>
            <div className="flex items-center gap-4 mt-2 text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{estabelecimento.avaliacao}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-5 w-5" />
                <span>{estabelecimento.tempoEntrega}</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">Cardápio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItens.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex"
              >
                <img src={item.imagem} alt={item.nome} className="w-1/3 h-full object-cover" />
                <div className="p-4 flex flex-col justify-between w-2/3">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{item.nome}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.descricao}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="font-bold text-lg text-green-600">
                      {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </p>
                    <Button size="sm" onClick={() => handleAddItem(item)}>
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Adicionar
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default RestaurantScreen;