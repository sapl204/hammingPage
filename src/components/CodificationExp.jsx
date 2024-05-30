import { Modal,ModalContent, ModalBody, ModalHeader, ModalFooter, Button } from "@nextui-org/react" 
export default function CodificationExp(props){
  return(
    <>
      <Modal isOpen = {props.isOpen} onOpenChange = {props.onOpenChange} backdrop="blur" placement="center" motionProps={{variants: {
            enter: {
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 0.5,
              },
            },
          }}}>
        <ModalContent>
          {(onClose)=>(
            <>
              {console.log(props.isOpen)}
              <ModalHeader className="flex justify-center items-center flex-col gap-1"> {props.title}</ModalHeader>
              <ModalBody>
                  <p>{props.content}</p>
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
