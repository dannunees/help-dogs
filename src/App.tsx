const App = () => {
  return (
    <>
      <div className="intro">
        
        <div className="container py-20 md:flex justify-end items-center gap-20">
          <div className="w-[100%] md:w-[400px]">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <img src="/pata.png" alt="Pata Dog" />
              <h4 className="text-3xl text-[#124C5F]">HelpDog</h4>
            </div>

            <div className="pt-[80px] text-center md:text-left">
              <h2 className="text-4xl text-center md:text-left">Ajude quem realmente
              precisa da sua ajuda.</h2>
              <p className="text-xl max-w-96 pt-6 text-center md:text-left">Com apenas 1 real você pode me ajudar
              a alimentar cães de ruas.</p>
              <button className="uppercase bg-[#124C5F] text-white font-semibold rounded p-4 mt-12">ajudar agora</button>
            </div>
          </div>
          <div className="w-2/4 relative hidden md:block">
            <img src="/dog-old.png" alt="Banner Dog" />
          </div>
        </div>

      </div>

      <div className="bg-[#124C5F0D] py-20 mt-12 md:mt-0 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-center">
          <div>
            <img src="/dog.png" alt="Dog" />
          </div>

          <div className="max-w-[592px] text-center md:text-left">
            <h2 className="text-3xl max-w-[429px] text-center md:text-left">Os cães falam, mas apenas
            para quem sabe ouvir.</h2>
            <p className="text-xl pt-5 text-center md:text-left">Descubra histórias encantadoras, segredos reveladores e a profunda conexão entre humanos e seus leais companheiros. Prepare-se para uma jornada única, onde a linguagem dos cães ganha vida para aqueles que estão sintonizados com o inexplorado mundo canino.</p>
            <button className="uppercase bg-[#124C5F] text-white font-semibold rounded p-4 mt-8">saiba mais</button>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container flex flex-col md:flex-row justify-center items-center md:items-end gap-28 md:gap-4">
          <div>
            <img src="/racao.png" alt="Special Dog" />
            <h2 className="text-3xl pt-8">Special Dog</h2>
            <p className="text-xl max-w-72 pt-4">Oferece uma refeição completa rica em proteínas e vitaminas.</p>
            <button className="uppercase bg-[#124C5F] text-white font-semibold rounded p-4 mt-8 w-[100%] md:w-[384px]">comprar agora</button>
          </div>
          <div>
            <img src="/petiscos.png" alt="Biskroc" />
            <h2 className="text-3xl pt-8">Biskroc</h2>
            <p className="text-xl max-w-72 pt-4">Biscoitos crocantes em formato de ossos com cálcio e ômega 6.</p>
            <button className="uppercase bg-[#124C5F] text-white font-semibold rounded p-4 mt-8 w-[100%] md:w-[384px]">comprar agora</button>
          </div>
          <div>
            <img src="/drools.png" alt="Drools" />
            <h2 className="text-3xl pt-8">Drools</h2>
            <p className="text-xl max-w-72 pt-4">Pedaços reais de fígado de frango e frango em molho.</p>
            <button className="uppercase bg-[#124C5F] text-white font-semibold rounded p-4 mt-8 w-[100%] md:w-[384px]">comprar agora</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App;