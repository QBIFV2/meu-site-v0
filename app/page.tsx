import Link from "next/link"
import { ArrowRight, Bot, BrainCircuit, Code, MessageSquare, Rocket, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <BrainCircuit className="h-6 w-6 text-purple-600" />
              <span className="inline-block font-bold">QBI STUDIO IA</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#servicos"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Serviços
              </Link>
              <Link
                href="#como-funciona"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Como Funciona
              </Link>
              <Link
                href="#cases"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Cases
              </Link>
              <Link
                href="#contato"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contato
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" className="hidden md:flex">
              Agendar Consulta
            </Button>
            <Button>Começar Agora</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Inteligência Artificial Personalizada para seu Negócio
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A QBI STUDIO IA desenvolve soluções de IA sob medida que transformam processos, aumentam eficiência
                    e impulsionam resultados para sua empresa.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Solicitar Demonstração <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Conheça Nossos Serviços
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-3xl opacity-20"></div>
                  <div className="relative bg-white rounded-xl shadow-xl p-6 h-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="bg-purple-50 p-4 rounded-lg flex flex-col items-center text-center">
                        <Bot className="h-8 w-8 text-purple-600 mb-2" />
                        <h3 className="font-medium">Chatbots Inteligentes</h3>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center text-center">
                        <Code className="h-8 w-8 text-blue-600 mb-2" />
                        <h3 className="font-medium">Automação de Processos</h3>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg flex flex-col items-center text-center">
                        <MessageSquare className="h-8 w-8 text-indigo-600 mb-2" />
                        <h3 className="font-medium">Análise de Dados</h3>
                      </div>
                      <div className="bg-violet-50 p-4 rounded-lg flex flex-col items-center text-center">
                        <Rocket className="h-8 w-8 text-violet-600 mb-2" />
                        <h3 className="font-medium">IA Personalizada</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nossos Serviços</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Desenvolvemos soluções de IA personalizadas que se adaptam perfeitamente às necessidades do seu
                  negócio
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Bot className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Assistentes Virtuais</h3>
                <p className="text-muted-foreground text-center">
                  Chatbots inteligentes que entendem linguagem natural e oferecem suporte 24/7 para seus clientes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Automação Inteligente</h3>
                <p className="text-muted-foreground text-center">
                  Automatize processos repetitivos e libere sua equipe para tarefas de maior valor estratégico.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <MessageSquare className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold">Análise Preditiva</h3>
                <p className="text-muted-foreground text-center">
                  Utilize dados para prever tendências e tomar decisões estratégicas com maior precisão.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="bg-violet-100 p-3 rounded-full">
                  <Users className="h-8 w-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold">Personalização de UX</h3>
                <p className="text-muted-foreground text-center">
                  Crie experiências personalizadas para seus usuários com base em seus comportamentos e preferências.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="bg-purple-100 p-3 rounded-full">
                  <BrainCircuit className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Modelos de IA Customizados</h3>
                <p className="text-muted-foreground text-center">
                  Desenvolvemos modelos de IA específicos para seu setor e necessidades de negócio.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Rocket className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Consultoria em IA</h3>
                <p className="text-muted-foreground text-center">
                  Orientação estratégica para implementar IA em sua empresa de forma eficiente e escalável.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Como Trabalhamos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nosso processo de desenvolvimento é colaborativo e transparente, garantindo soluções que realmente
                  atendam às suas necessidades
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-xl font-bold">Diagnóstico</h3>
                <p className="text-muted-foreground text-center">
                  Analisamos profundamente seu negócio para identificar oportunidades de aplicação de IA.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-bold">Desenvolvimento</h3>
                <p className="text-muted-foreground text-center">
                  Criamos soluções personalizadas utilizando as tecnologias mais avançadas de IA.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-bold">Implementação</h3>
                <p className="text-muted-foreground text-center">
                  Integramos a solução ao seu negócio e oferecemos suporte contínuo para garantir resultados.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cases" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cases de Sucesso</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça alguns dos resultados que já alcançamos para nossos clientes
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Varejo Inteligente</h3>
                  <p className="text-muted-foreground">
                    Implementamos um sistema de recomendação personalizada que aumentou as vendas em 35% para uma rede
                    de varejo.
                  </p>
                </div>
                <div className="rounded-lg bg-purple-50 p-4">
                  <p className="font-medium text-purple-900">
                    "A solução da QBI transformou nossa abordagem de vendas online, oferecendo recomendações precisas
                    que nossos clientes realmente apreciam."
                  </p>
                  <p className="mt-2 text-sm text-purple-700">— Diretor de E-commerce</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Atendimento Automatizado</h3>
                  <p className="text-muted-foreground">
                    Desenvolvemos um chatbot que reduziu em 70% o tempo de resposta ao cliente para uma empresa de
                    telecomunicações.
                  </p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="font-medium text-blue-900">
                    "Nosso NPS aumentou significativamente após a implementação do assistente virtual. Os clientes estão
                    mais satisfeitos com o atendimento rápido."
                  </p>
                  <p className="mt-2 text-sm text-blue-700">— Gerente de Atendimento</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Otimização Logística</h3>
                  <p className="text-muted-foreground">
                    Criamos um algoritmo de IA que otimizou rotas de entrega, reduzindo custos operacionais em 25%.
                  </p>
                </div>
                <div className="rounded-lg bg-indigo-50 p-4">
                  <p className="font-medium text-indigo-900">
                    "A solução de IA da QBI nos permitiu fazer mais entregas com menos recursos, melhorando nossa
                    eficiência operacional."
                  </p>
                  <p className="mt-2 text-sm text-indigo-700">— Diretor de Operações</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vamos Conversar</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Estamos prontos para entender seu negócio e desenvolver a solução de IA ideal para suas necessidades
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                    <span>qbistudioai@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span>+55 (17) 99101-2920</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nome
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Empresa
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Sua empresa"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Descreva seu projeto ou necessidade"
                    />
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Enviar Mensagem</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 QBI STUDIO IA. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Termos
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacidade
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
