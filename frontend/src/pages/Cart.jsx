//Imagen massamia
import Logo from '../assests/images/logo-masa-mia.png'

export default function Cart() {
    return (
      <header>
      <div class="flex justify-between ...">
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </div>

      <div class="container mx-auto flex items-center justify-between py-1 ">
      <a href="http://localhost:3000">
              <img src={Logo} alt="Logo Image" className='absolute left-5 top-5 h-16 w-16' />
            </a>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </div>

      {/*Shoping Cart*/}
      
      <div class="container mx-auto flex items-center justify-between py-5 ">
        <hr />
        <div>
        <p class="font-mono text-2xl">
          Carro de compras
        </p>
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </div>
      
</header>
      
    )
  }