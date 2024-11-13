import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Users,
  Award,
  Dumbbell,
  Sword,
  Check,
} from "lucide-react";

import logo from "@/assets/logo.png";
import whiteLogo from "@/assets/white-logo.png";
import bjjTurma from "@/assets/bjj-turma.jpg";
import kidsTurma from "@/assets/kids-turma.jpg";
import femininoTurma from "@/assets/feminino-turma.jpg";
import muayThaiTurma from "@/assets/muathai-turma.jpg";
import noGiTurma from "@/assets/no-gi-turma.jpg";
import eventobjj from "@/assets/eventoBjj.png";
import eventoNordestePan from "@/assets/evento-nordeste-pan.png";
import eventoTainan from "@/assets/evento-tainan.png";
import rodrigoArgentino from "@/assets/rodrigo-argentino.png";
import jonadabe from "@/assets/jonadabe.png";
import laynne from "@/assets/laynne.png";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "@/components/star";
import { Routes } from "@/enum/route";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Modalidades", href: "#modalities" },
    { name: "Planos", href: "#pricing" },
    { name: "Instrutores", href: "#instructors" },
    { name: "Eventos", href: "#events" },
    { name: "Contato", href: "#contact" },
  ];

  const benefits = [
    {
      title: "Ambiente motivador",
    },
    {
      title: "Técnicas avançadas",
    },
    {
      title: "Instrutores experientes",
    },
    {
      title: "Treinamento personalizado",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      >
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src={logo} alt="logo" className="h-6 w-6" />
            <a href="/" className="text-2xl font-bold">
              CT Rodrigo Argentino
            </a>
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`hover:text-primary font-semibold transition-colors hover:text-zinc-700 ${
                  activeSection === item.href.slice(1)
                    ? "border-b-2 border-zinc-800"
                    : "text-zinc-800 "
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="hidden md:block text-zinc-50"
                onClick={() => window.open(Routes.Whatsapp, "_blank")}
              >
                Aula Experimental
              </Button>
            </motion.div>
            <button
              className="md:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white py-2"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 py-2">
              <Button
                variant="outline"
                className="w-full bg-black text-zinc-50"
              >
                Aula Experimental
              </Button>
            </div>
          </motion.div>
        )}
      </motion.header>

      <main className="pt-16">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          id="home"
          className="py-12 2xl:py-36 bg-white text-black"
        >
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${bjjTurma})`,
              opacity: "0.05",
            }}
          ></div>

          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div variants={fadeInUp} className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-5xl sm:text-4xl text-center sm:text-left md:text-6xl font-bold mb-4">
                  Transforme-se através das
                  <span className="text-"> Artes Marciais</span>
                </h1>
                <p className="text-xl text-center sm:text-left mb-6">
                  Descubra o poder do Jiu-Jitsu e Muay Thai no Centro de
                  Treinamento Rodrigo Argentino.
                </p>
                <div className="flex space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="default"
                      className="border border-zinc-400"
                      onClick={() => window.open(Routes.Whatsapp, "_blank")}
                    >
                      Comece Hoje
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-zinc-50"
                      onClick={() => window.open(Routes.Whatsapp, "_blank")}
                    >
                      Conheça Mais
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div variants={zoomIn} className="md:w-1/2">
                <img src={logo} alt="CTRA LOGO" width={600} height={400} />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          id="about"
          className="py-12 md:py-24 bg-black text-white"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center sm:text-left">
                  Sobre o CT Rodrigo Argentino
                </h2>
                <p className="text-lg mb-4 text-center sm:text-left">
                  O <strong>Centro de Treinamento Rodrigo Argentino</strong> é
                  um espaço dedicado à excelência nas artes marciais, oferecendo
                  treinamento de alta qualidade em <strong>Jiu-Jitsu</strong> e{" "}
                  <strong>Muay Thai</strong> para praticantes de todos os
                  níveis.
                </p>
                <p className="text-lg mb-4 text-center sm:text-left">
                  Com instrutores experientes e uma abordagem focada no
                  desenvolvimento pessoal e técnico, nosso objetivo é ajudar
                  cada aluno a alcançar seu potencial máximo, tanto no tatame
                  quanto na vida.
                </p>
                <div className="mt-12">
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <motion.div key={index}>
                        <div className="flex gap-3 items-center justify-center bg-zinc-900 bg-opacity-50 text-zinc-50 font-semibold p-4 rounded-lg">
                          <div className="bg-zinc-100 bg-opacity-10 p-1 rounded-full">
                            <Check className="h-5 w-5" />
                          </div>
                          <span>{benefit.title}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div variants={zoomIn} className="relative">
                <img
                  src={bjjTurma}
                  alt="Interior do centro de treinamento"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-6 -right-0 bg-primary/95 text-white p-4 rounded-lg shadow-lg text-center"
                >
                  <div className="flex gap-1 items-center justify-center py-2">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <p className="font-bold text-2xl text-zinc-800">+10 Anos</p>
                  <p className="text-zinc-800">de Excelência</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          id="modalities"
          className="py-12 md:py-24 bg-white text-black"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Nossas Modalidades
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Jiu-Jitsu Infantil",
                  description:
                    "Desenvolvimento físico e mental para crianças através das técnicas do Jiu-Jitsu.",
                  icon: <Users className="h-8 w-8 mb-4" />,
                  image: kidsTurma,
                },
                {
                  title: "Jiu-Jitsu Feminino",
                  description:
                    "Aulas exclusivas para mulheres, focadas em defesa pessoal e condicionamento.",
                  icon: <Award className="h-8 w-8 mb-4" />,
                  image: femininoTurma,
                },
                {
                  title: "Muay Thai",
                  description:
                    "Arte marcial tailandesa que desenvolve força, resistência e técnicas de striking.",
                  icon: <Dumbbell className="h-8 w-8 mb-4" />,
                  image: muayThaiTurma,
                },
                {
                  title: "Jiu-Jitsu",
                  description:
                    "Jiu-Jitsu tradicional, focado em técnicas de finalização e controle.",
                  icon: <Sword className="h-8 w-8 mb-4" />,
                  image: noGiTurma,
                },
              ].map((modality, index) => (
                <motion.div
                  key={index}
                  variants={zoomIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full bg-zinc-50">
                    <img
                      src={modality.image}
                      alt={modality.title}
                      width={300}
                      height={200}
                      className="w-full object-cover h-48"
                    />
                    <CardHeader>
                      <CardTitle className="flex items-center justify-center">
                        <span className="ml-2 text-zinc-950">
                          {modality.title}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-zinc-700">
                        {modality.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button
                        variant="outline"
                        onClick={() => window.open(Routes.Whatsapp, "_blank")}
                      >
                        Saiba Mais
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          id="pricing"
          className="py-12 md:py-24 bg-black text-white"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Nossos Planos
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Básico",
                  price: "R$ 99,00",
                  description: "Ideal para iniciantes",
                  features: [
                    "Acompanhamento em grupo",
                    "Acesso a uma modalidade",
                  ],
                },
                {
                  name: "Intermediário",
                  price: "R$ 130,00",
                  description: "Para quem quer se dedicar mais",
                  features: [
                    "Acesso a duas modalidades",
                    "Acompanhamento em grupo",
                  ],
                },
                {
                  name: "Parceria Champions",
                  price: "R$ 130,00",
                  description: "Para atletas dedicados",
                  features: [
                    "Acesso a duas modalidades",
                    "Academia Champions + Jiu-Jitsu ou",
                    "Academia Champions + Muay Thai",
                  ],
                },
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  variants={zoomIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`overflow-hidden transition-all duration-300 h-full ${
                      index === 1 ? "border-primary shadow-lg scale-105" : ""
                    }`}
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-center">
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="text-center">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-4xl font-bold text-center mb-6">
                        {plan.price}
                        <span className="text-sm font-normal">/mês</span>
                      </p>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2 text-green-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full"
                        onClick={() => window.open(Routes.Whatsapp, "_blank")}
                        variant={index === 1 ? "default" : "outline"}
                      >
                        Escolher Plano
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          id="instructors"
          className="py-12 md:py-24 bg-white text-black"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Nossos Instrutores
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rodrigo Argentino",
                  role: "Head Coach - Jiu-Jitsu",
                  image: rodrigoArgentino,
                  description:
                    "Faixa preta 2º grau com mais de 20 anos de experiência.",
                },
                {
                  name: "Laynne Bjj",
                  role: "Instrutora de Jiu Jitsu",
                  image: laynne,
                  description:
                    "Faixa marrom especializada em Jiu-Jitsu feminino e defesa pessoal.",
                },
                {
                  name: "Jonadabe",
                  role: "Instrutor de Jiu-Jitsu",
                  image: jonadabe,
                  description: "Faixa preta especializado em Jiu-Jitsu.",
                },
              ].map((instructor, index) => (
                <motion.div
                  key={index}
                  variants={zoomIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-white hover:bg-gray-100 transition-colors duration-300 h-full">
                    <CardContent className=" text-center">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        width={200}
                        height={200}
                        className="mb-4 w-full object-cover h-72 rounded-lg pl-[-20px] pr-[-20px]"
                      />
                      <h3 className="text-xl font-bold mb-2 text-black">
                        {instructor.name}
                      </h3>
                      <p className="text-zinc-900 mb-2">{instructor.role}</p>
                      <p className="text-zinc-600">{instructor.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          id="events"
          className="py-12 md:py-24 bg-black text-white"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Eventos e Campeonatos
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Campeonato Interno de Jiu-Jitsu",
                  date: "15 de Julho, 2024",
                  description:
                    "Competição amistosa entre os alunos do CT Rodrigo Argentino.",
                  image: eventobjj,
                },
                {
                  title: "Nordeste Panamericano",
                  date: "EM BREVE",
                  description:
                    "Campeonato com premiações em todos os absolutos e premiação em todas as categorias.",
                  image: eventoNordestePan,
                },
                {
                  title: "Seminário com Tainan Dalpra",
                  date: "08 de Dezembro, 2024",
                  description:
                    "Seminário com o campeão mundial Tainan Dalpra, faixa preta.",
                  image: eventoTainan,
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  variants={zoomIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden bg-white text-black h-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      width={300}
                      height={500}
                      className="w-full object-cover h-80"
                    />
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>{event.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="default"
                        onClick={() => window.open(Routes.Eventos, "_blank")}
                      >
                        Inscreva-se
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          id="contact"
          className="py-12 md:py-24 bg-white text-black"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center sm:text-left">
                  Entre em Contato
                </h2>
                <h3 className="text-2xl font-bold mb-4">
                  Informações de Contato
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <MapPin className="mr-2" />
                    <span>Rua das Artes Marciais, 123 - São Paulo, SP</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="mr-2" />
                    <span>(11) 1234-5678</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-2" />
                    <span>contato@ctrodrigoargentino.com</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <h4 className="text-xl font-bold mb-2">Siga-nos</h4>
                  <div className="flex space-x-4">
                    <motion.a
                      href="#"
                      className="text-gray-600 hover:text-primary"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Instagram />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-gray-600 hover:text-primary"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Facebook />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold mb-4">
                  Envie-nos uma Mensagem
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 bg-gray-100 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 bg-gray-100 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-gray-100 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="default" type="submit">
                      Enviar Mensagem
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-black text-white py-8"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src={whiteLogo} alt="logo" className="w-11 h-11" />
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">CT Rodrigo Argentino</h3>
                <p>Transformando vidas através das artes marciais</p>
              </div>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Centro de Treinamento Rodrigo
            Argentino. Todos os direitos reservados.
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
