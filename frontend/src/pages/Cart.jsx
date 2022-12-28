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
        <div>01</div>
        <div>02</div>
        <div>Cart car
          
        </div>
      </div>
</header>
      
    )
  }