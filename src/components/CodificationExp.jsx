import { Modal,ModalContent, ModalBody, ModalHeader, ModalFooter, Button } from "@nextui-org/react" 
export default function CodificationExp(props){
  const content = "$$g^n(z_0) = \\frac{n!}{2\\pi i} \\oint_\\gamma \\frac{g(z)}{(z-z_0)^{n+1}}dz$$"
  return(
    <>
      <Modal isOpen = {props.isOpen} onOpenChange = {props.onOpenChange}>
        <ModalContent>
          {(onClose)=>(
            <>
              <ModalHeader className="flex justify-center items-center flex-col gap-1"> Codification</ModalHeader>
              <ModalBody>
                <div>
                  <p>{content}</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>Close</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
