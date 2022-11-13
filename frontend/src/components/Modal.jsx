import { Fragment, useState } from "react";
import { Button,Dialog,Card,CardHeader,CardBody,CardFooter,Typography,Input,Checkbox } from "@material-tailwind/react";

import "../css/modal.css";
 
export default function Modal() {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <Fragment>
      <Button onClick={handleOpen} >
         <svg class="w-6 h-6 text-gray-200 hover:text-indigo-200 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
      </Button>

      <Dialog 

        open={open}
        handler={handleOpen}

        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}

        className="modal"
      > 
        
        <Card className="w-80" >
              
              <CardHeader
                variant="gradient"
                color="#fff"
                className="mb-4 grid h-28 place-items-center"
              >
                <Typography variant="h3" color="black">
                  Usuari@
                </Typography>
              </CardHeader>

              <CardBody className="flex flex-col gap-4 contedor">
                <Input  size="lg" placeholder="correo electronico"/>
                <Input type="password" class="form-control" size="lg" placeholder="pasword" />

                <div className="-ml-2.5">
                  <Checkbox label="Remember Me" />
                </div>

              </CardBody>

              <CardFooter className="pt-0" color="black">
                <Button  fullWidth>
                  Ingresar
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                  No tiene una cuenta?

                  <Typography
                    as="a"
                    href="/Registro"
                    variant="small"
                    color="black"
                    className="ml-1 font-bold"
                  >
                    Registrate
                  </Typography>

                </Typography>

              </CardFooter>
            </Card>

      </Dialog>
    </Fragment>
  );
}