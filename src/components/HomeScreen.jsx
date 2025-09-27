import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Clock, Tag, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  const { toast } = useToast();
  const [currentBanner, setCurrentBanner] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [onlyPromos, setOnlyPromos] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const banners = [
    { id: 1, titulo: "50% OFF em Pizzas", imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=300&fit=crop", validade: "2025-12-31" },
    { id: 2, titulo: "Hambúrguer + Batata R$ 25", imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=300&fit=crop", validade: "2025-12-25" },
    { id: 3, titulo: "Açaí Grátis na Compra de 2", imagem: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&h=300&fit=crop", validade: "2025-12-20" }
  ];

  const categorias = [
    { nome: "Todos", icone: "🍽️", cor: "from-gray-400 to-gray-600" },
    { nome: "Hambúrguer", icone: "🍔", cor: "from-red-400 to-red-600" },
    { nome: "Pizza", icone: "🍕", cor: "from-orange-400 to-orange-600" },
    { nome: "Açaí", icone: "🍇", cor: "from-purple-400 to-purple-600" },
    { nome: "Doces", icone: "🍰", cor: "from-pink-400 to-pink-600" },
    { nome: "Bebidas", icone: "🥤", cor: "from-blue-400 to-blue-600" }
  ];

  const estabelecimentos = [
    { id: 1, nome: "Burger Palace", avaliacao: 4.8, tempoEntrega: "25-35 min", promocao: true, imagem: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop", categoria: "Hambúrguer" },
    { id: 2, nome: "Pizza Suprema", avaliacao: 4.6, tempoEntrega: "30-40 min", promocao: false, imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop", categoria: "Pizza" },
    { id: 3, nome: "Açaí do Vale", avaliacao: 4.9, tempoEntrega: "15-25 min", promocao: true, imagem: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=300&h=200&fit=crop", categoria: "Açaí" },
    { id: 4, nome: "Doce Tentação", avaliacao: 4.7, tempoEntrega: "20-30 min", promocao: false, imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop", categoria: "Doces" }
  ];

  const filteredEstabelecimentos = useMemo(() => {
    return estabelecimentos.filter(est => {
      const matchesSearch = est.nome.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPromo = !onlyPromos || est.promocao;
      const matchesCategory = selectedCategory === 'Todos' || est.categoria === selectedCategory;
      return matchesSearch && matchesPromo && matchesCategory;
    });
  }, [searchTerm, onlyPromos, selectedCategory, estabelecimentos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const nextBanner = () => setCurrentBanner((prev) => (prev + 1) % banners.length);
  const prevBanner = () => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="min-h-screen">
      <motion.header initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white shadow-lg p-4 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Deliveresitau</h1>
          <p className="text-gray-600 mt-1">Delivery rápido na sua região</p>
        </div>
      </motion.header>

      <div className="max-w-6xl mx-auto p-4 space-y-8">
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="relative">
          <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div key={currentBanner} initial={{ opacity: 0, x: 300 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -300 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                <img src={banners[currentBanner].imagem} alt={banners[currentBanner].titulo} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                  <div className="text-white p-6 md:p-8">
                    <h2 className="text-2xl md:text-4xl font-bold mb-2">{banners[currentBanner].titulo}</h2>
                    <p className="text-sm md:text-base opacity-90">Válido até {new Date(banners[currentBanner].validade).toLocaleDateString('pt-BR')}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <Button variant="ghost" size="icon" onClick={prevBanner} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"><ChevronLeft className="h-6 w-6" /></Button>
            <Button variant="ghost" size="icon" onClick={nextBanner} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"><ChevronRight className="h-6 w-6" /></Button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {banners.map((_, index) => (<button key={index} onClick={() => setCurrentBanner(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentBanner ? 'bg-white w-6' : 'bg-white/50'}`} />))}
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Buscar</h2>
          <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded-xl shadow-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input type="text" placeholder="Buscar por restaurante..." className="pl-10" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="promos" checked={onlyPromos} onCheckedChange={setOnlyPromos} />
              <Label htmlFor="promos" className="font-medium whitespace-nowrap">Apenas promoções</Label>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Categorias</h2>
          <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4">
            {categorias.map((categoria) => (
              <motion.button key={categoria.nome} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setSelectedCategory(categoria.nome)} className={`flex-shrink-0 bg-gradient-to-br ${categoria.cor} px-5 py-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2 ${selectedCategory === categoria.nome ? 'ring-4 ring-offset-2 ring-orange-400' : ''}`}>
                <span className="text-xl">{categoria.icone}</span>
                <span className="font-semibold">{categoria.nome}</span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Estabelecimentos</h2>
          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEstabelecimentos.map((estabelecimento, index) => (
                <motion.div key={estabelecimento.id} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: 0.05 * index }} whileHover={{ y: -5 }}>
                  <Link to={`/restaurant/${estabelecimento.id}`} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden group block">
                    <div className="relative">
                      <img src={estabelecimento.imagem} alt={estabelecimento.nome} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                      {estabelecimento.promocao && (<div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1"><Tag className="h-3 w-3" />Promoção</div>)}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">{estabelecimento.nome}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-1"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /><span className="font-semibold">{estabelecimento.avaliacao}</span></div>
                        <div className="flex items-center gap-1"><Clock className="h-4 w-4" /><span>{estabelecimento.tempoEntrega}</span></div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
          {filteredEstabelecimentos.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
              <p className="text-gray-600 font-semibold">Nenhum estabelecimento encontrado.</p>
              <p className="text-gray-500">Tente ajustar seus filtros de busca.</p>
            </motion.div>
          )}
        </motion.section>
      </div>
    </div>
  );
};

export default HomeScreen;