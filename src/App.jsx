import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, MapPin, Home, Shield, Clock, Phone, Mail, MessageCircle, Award, Users } from 'lucide-react'
import './App.css'

// Importando as imagens
import img1 from './assets/1000381888.jpg'
import img2 from './assets/1000381891.jpg'
import img3 from './assets/1000381892.jpg'
import img4 from './assets/1000381893.jpg'
import img5 from './assets/1000381895.jpg'
import img6 from './assets/1000381898.jpg'
import img7 from './assets/1000381899.jpg'
import img8 from './assets/1000381902.jpg'
import img9 from './assets/1000381903.jpg'
import img10 from './assets/1000381904.jpg'
import imgTabela from './assets/1000381864.jpg'
import marcosLimaImg from './assets/1000229277.jpg'
import logoCorretor from './assets/1000370413.png'
import logoImoveis from './assets/1000355304.jpg'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    interesse: '',
    mensagem: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      interesse: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validar campos obrigatórios
    if (!formData.nome || !formData.telefone || !formData.email || !formData.interesse) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }
    
    try {
      // Enviar dados para o backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json()
      
      if (result.success) {
        // Mostrar mensagem de sucesso
        alert(result.message)
        
        // Redirecionar para WhatsApp
        if (result.whatsapp_url) {
          window.open(result.whatsapp_url, '_blank')
        }
        
        // Reset do formulário
        setFormData({
          nome: '',
          telefone: '',
          email: '',
          interesse: '',
          mensagem: ''
        })
      } else {
        alert('Erro: ' + result.error)
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      
      // Fallback: usar método anterior (apenas WhatsApp)
      const mensagemWhatsApp = `Olá Marcos! Tenho interesse no Villa Flor.
      
Nome: ${formData.nome}
Telefone: ${formData.telefone}
Email: ${formData.email}
Interesse: ${formData.interesse}
Mensagem: ${formData.mensagem}`
      
      const numeroWhatsApp = '5585997635718'
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`
      
      // Abrir WhatsApp
      window.open(urlWhatsApp, '_blank')
      
      // Reset do formulário
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        interesse: '',
        mensagem: ''
      })
      
      alert('Formulário enviado! Você será redirecionado para o WhatsApp.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-800">Villa Flor</div>
            <div className="flex items-center gap-4">
              <a href="tel:+5585997635718" className="flex items-center gap-2 text-green-600 hover:text-green-700">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">(85) 99763-5718</span>
              </a>
              <a href="mailto:marcoschavesseucorretor@gmail.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img7})` }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-semibold animate-pulse">
            🔥 ÚLTIMAS UNIDADES DISPONÍVEIS
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Sua Casa Exclusiva em<br />
            <span className="text-yellow-400">Rua Privativa</span> no Eusébio
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Você já imaginou morar em uma rua totalmente privativa no Eusébio? 
            Conforto, segurança e negociação flexível em um dos locais mais valorizados da região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold"
              onClick={() => document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              QUERO AGENDAR VISITA AGORA
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
              onClick={() => document.getElementById('precos').scrollIntoView({ behavior: 'smooth' })}
            >
              VER PREÇOS E CONDIÇÕES
            </Button>
          </div>
          
          {/* Contador de Escassez */}
          <div className="mt-12 bg-red-600/90 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">OFERTA LIMITADA</span>
            </div>
            <p className="text-sm">Apenas 12 unidades restantes com condições especiais de lançamento</p>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Localização Privilegiada
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Estrategicamente localizado próximo à CE-010 e Estrada do Fio, no coração do Eusébio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Rua Privativa, Próximo à CE-010 e Estrada do Fio - Eusébio
                  </h3>
                  <p className="text-slate-600">
                    Uma localização que combina tranquilidade residencial com fácil acesso aos principais pontos da região metropolitana de Fortaleza.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Acesso rápido à CE-010</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Próximo a comércios e serviços</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Região em constante valorização</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Segurança de rua privativa</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src={img1} alt="Vista do empreendimento" className="rounded-lg shadow-lg" />
              <img src={img2} alt="Localização" className="rounded-lg shadow-lg" />
              <img src={img3} alt="Área externa" className="rounded-lg shadow-lg" />
              <img src={img4} alt="Fachada" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Por que escolher o Villa Flor?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Conheça os diferenciais que fazem do Villa Flor o investimento ideal para sua família
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Casas de 137 a 144m²</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Plantas modernas e funcionais, projetadas para oferecer máximo conforto e aproveitamento dos espaços.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Rua Totalmente Privativa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Segurança e tranquilidade para sua família, com acesso controlado e ambiente exclusivo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">4 Suítes com Closet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Suíte master com closet e mais 3 suítes reversíveis, oferecendo flexibilidade e conforto.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Varanda Gourmet Integrada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Espaço perfeito para receber amigos e família, com integração total aos ambientes sociais.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Condições Personalizadas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Negociação flexível e condições de pagamento adaptadas ao seu perfil e necessidades.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Localização Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Próximo à CE-010 e Estrada do Fio, com fácil acesso a toda região metropolitana.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Conheça o Villa Flor
            </h2>
            <p className="text-xl text-slate-600">
              Veja como será sua nova casa
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[img5, img6, img8, img9, img10, img1, img2, img3].map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={img} 
                  alt={`Villa Flor ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preços e Condições */}
      <section id="precos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-600 text-white px-4 py-2">
              CONDIÇÕES ESPECIAIS DE LANÇAMENTO
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Preços e Condições
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Aproveite as condições exclusivas de lançamento. Oportunidade única!
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Card Preço Padrão */}
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                  <Badge className="mb-2 bg-blue-800 text-white">MAIS VENDIDO</Badge>
                  <CardTitle className="text-3xl font-bold">Preço Padrão</CardTitle>
                  <CardDescription className="text-blue-100 text-lg">Condições especiais de lançamento</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-600 mb-2">A partir de</div>
                    <div className="text-5xl font-bold text-slate-800">R$ 669.900</div>
                    <div className="text-lg text-slate-600 mt-2">Casas de 137m² a 144m²</div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">4 Quartos (3 suítes reversíveis)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">Suíte Master com Closet</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">Varanda Gourmet Integrada</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">2 Vagas de Garagem</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">Rua Totalmente Privativa</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-blue-600 font-semibold">CONDIÇÕES ESPECIAIS</div>
                      <div className="text-lg font-bold text-blue-800">Sinal de entrada de 10%</div>
                      <div className="text-sm text-blue-600">Fluxo de pagamento flexível</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-100 rounded-lg p-3 mb-4 border-l-4 border-green-500">
                    <div className="text-center">
                      <div className="text-green-800 font-bold">📞 Fale com o corretor</div>
                      <div className="text-green-700 text-sm">Atendimento personalizado</div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
                    onClick={() => document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' })}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    QUERO ESTA OPÇÃO
                  </Button>
                </CardContent>
              </Card>

              {/* Card Unidade Premium */}
              <Card className="border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-2 text-sm font-bold">
                    ⭐ PREMIUM
                  </Badge>
                </div>
                <CardHeader className="text-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-t-lg pt-8">
                  <CardTitle className="text-3xl font-bold">Unidade Premium</CardTitle>
                  <CardDescription className="text-yellow-100 text-lg">Localização privilegiada + Acabamentos especiais</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">A partir de</div>
                    <div className="text-5xl font-bold text-slate-800">R$ 769.900</div>
                    <div className="text-lg text-slate-600 mt-2">Casas de 144m² - Lotes maiores</div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-600" />
                      <span className="text-slate-700">4 Suítes completas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-600" />
                      <span className="text-slate-700">Suíte Master ampliada com Closet</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-600" />
                      <span className="text-slate-700">Varanda Gourmet Premium</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-600" />
                      <span className="text-slate-700">2 Vagas de Garagem cobertas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-600" />
                      <span className="text-slate-700">Lote de esquina privilegiado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-600" />
                      <span className="text-slate-700">Acabamentos diferenciados</span>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4 mb-6">
                    <div className="text-center">
                      <div className="text-sm text-yellow-600 font-semibold">EXCLUSIVIDADE</div>
                      <div className="text-lg font-bold text-yellow-800">Apenas 3 unidades disponíveis</div>
                      <div className="text-sm text-yellow-600">Localização premium na rua</div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-4 text-lg font-semibold"
                    onClick={() => document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' })}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    QUERO A PREMIUM
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-green-800">Tipo 1</CardTitle>
                  <CardDescription className="text-green-600">137,14m²</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>4 Quartos</span>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>3 Suítes Reversíveis</span>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Suíte Master c/ Closet</span>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Varanda Gourmet</span>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>2 Vagas de Garagem</span>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Lote: 8m x 21m</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-blue-800">Tipo 2</CardTitle>
                  <CardDescription className="text-blue-600">144,67m²</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>4 Suítes</span>
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Suíte Master c/ Closet</span>
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Sala Jantar e Estar</span>
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Varanda Gourmet</span>
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>2 Vagas de Garagem</span>
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Lote: 8,66m x 21,5m</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-purple-800">Tipo 3</CardTitle>
                  <CardDescription className="text-purple-600">137,14m²</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>4 Suítes</span>
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Suíte Master c/ Closet</span>
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Sala Jantar e Estar</span>
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>Varanda Gourmet</span>
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex justify-between">
                    <span>2 Vagas de Garagem</span>
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Lote: 9,27m x 21m</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Corretor */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto overflow-hidden md:flex">
            <div className="md:w-1/3">
              <img 
                src={marcosLimaImg} 
                alt="Marcos Lima - Corretor Especialista"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={logoCorretor} 
                  alt="Logo Marcos Lima"
                  className="w-12 h-12 object-contain"
                />
                <h2 className="text-3xl font-bold text-gray-900">
                  Marcos Lima
                </h2>
              </div>
              <p className="text-gray-700 mb-6">
                Especialista em imóveis de médio e alto padrão, focado em transformar a compra em uma experiência segura e diferenciada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => document.getElementById("formulario").scrollIntoView({ behavior: "smooth" })}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Agendar Visita
                </Button>
                <Button 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => document.getElementById("formulario").scrollIntoView({ behavior: "smooth" })}
                >
                  Receber Material
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="formulario" className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-red-600 text-white px-4 py-2 animate-pulse">
                🚨 ÚLTIMAS UNIDADES - AÇÃO LIMITADA
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Garanta Sua Casa Agora!
              </h2>
              <p className="text-xl">
                Preencha o formulário e receba atendimento personalizado via WhatsApp
              </p>
            </div>
            
            <Card className="bg-white text-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-slate-800">
                  Quero Conhecer o Villa Flor
                </CardTitle>
                <CardDescription className="text-center text-slate-600">
                  Preencha seus dados e entraremos em contato imediatamente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="telefone">WhatsApp *</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(85) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="interesse">Seu Interesse *</Label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="material">Quero receber o material completo</SelectItem>
                        <SelectItem value="visita">Quero agendar uma visita</SelectItem>
                        <SelectItem value="financiamento">Quero saber sobre financiamento</SelectItem>
                        <SelectItem value="preco">Quero negociar preço</SelectItem>
                        <SelectItem value="outros">Outros assuntos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="mensagem">Mensagem (Opcional)</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Conte-nos mais sobre seu interesse..."
                      rows={3}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    ENVIAR E FALAR NO WHATSAPP
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="text-center mt-8">
              <p className="text-sm opacity-90">
                Ao enviar este formulário, você será redirecionado para o WhatsApp do Marcos Lima
              </p>
              <p className="text-xs opacity-75 mt-2">
                Seus dados estão seguros e não serão compartilhados com terceiros
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Villa Flor</h3>
              <p className="text-slate-300 mb-4">
                Sua casa exclusiva em rua privativa no Eusébio. Conforto, segurança e negociação flexível.
              </p>
              <div className="flex gap-4">
                <a href="tel:+5585997635718" className="text-green-400 hover:text-green-300">
                  <Phone className="w-6 h-6" />
                </a>
                <a href="mailto:marcoschavesseucorretor@gmail.com" className="text-blue-400 hover:text-blue-300">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://wa.me/5585997635718" className="text-green-400 hover:text-green-300">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Localização</h4>
              <p className="text-slate-300">
                Rua Privativa<br />
                Próximo à CE-010 e Estrada do Fio<br />
                Eusébio - CE
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Marcos Lima</h4>
              <p className="text-slate-300 mb-2">Corretor Especialista</p>
              <p className="text-slate-300 mb-2">(85) 99763-5718</p>
              <p className="text-slate-300">marcoschavesseucorretor@gmail.com</p>

            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              <p className="text-slate-400 mb-2">CRECI: 26445</p>
              © 2024 Villa Flor. Todos os direitos reservados. | Imagens meramente ilustrativas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

