"use client"



import {Button, Modal} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useState } from "react";
const ConfromDeleteModal = ({ productId }) => {
    const [pending,setPending]= useState(false)

  const handleDelete = async() => {
    try {
        setPending(true)
        const {data:tokenData} = await authClient.token()
    const token = tokenData?.token
    const deleteData = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/product/${productId}`,{
        method:"DELETE",
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
  const res = await deleteData.json();

if (res.success) {
  toast.success(res.message);
} else {
  toast.error(res.message);
}
    } catch (error) {
        console.log(error);
    } finally{
        setPending(false)
    }
  };

  return (
    <Modal>
      <Button
        variant="bordered"
        className="flex-1 rounded-xl border border-red-500 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
      >
        Delete
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px] bg-white dark:bg-[#0b1120] border border-gray-200 dark:border-white/10 rounded-3xl">

            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-red-500/10 text-red-500">
                🗑️
              </Modal.Icon>

              <Modal.Heading className="text-black dark:text-white">
                Delete Idea
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <p className="text-sm text-gray-600 dark:text-white/60">
                Are you sure you want to delete this startup idea?
                This action cannot be undone.
              </p>
            </Modal.Body>

            <Modal.Footer className="flex gap-3">

              <Button
                variant="bordered"
                className="flex-1 rounded-xl"
                slot="close"
              >
                Cancel
              </Button>

              <Button
             
                color="danger"
                variant="bordered"
        className="flex-1 rounded-xl border border-red-500 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
                onPress={handleDelete}
                isLoading={pending}
                isDisabled={pending}
              >
                {pending ? "Deleting..." : "Delete"}
              </Button>

            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};




const DeleteProduct = ({productId}) => {
    
  return (
   <>
    <ConfromDeleteModal productId={productId}/></>
  );
};

export default DeleteProduct;
