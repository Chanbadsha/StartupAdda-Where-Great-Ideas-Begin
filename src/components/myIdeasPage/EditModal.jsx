"use client";

import { useState } from "react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { motion } from "motion/react";
import toast from "react-hot-toast";

const EditModal = ({ idea, editIdeaAction }) => {
  const [form, setForm] = useState({
    ideaTitle: idea?.ideaTitle || "",
    shortDescription: idea?.shortDescription || "",
    status: idea?.status || "Draft",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const update = await editIdeaAction(idea._id, form);
    if (update.result.modifiedCount > 0) {
      toast.success("Idea update successfully!");
    } else {
      toast("Something went wrong", { icon: "❌" });
    }
  };

  return (
    <Modal>
      {/* Trigger */}
      <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Button
          className="flex-1 rounded-xl border border-violet-200 px-4 py-2 text-sm font-medium text-violet-700 hover:bg-violet-50"
          variant="secondary"
        >
          Edit
        </Button>
      </motion.span>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header>
              <Modal.Heading>Edit Idea</Modal.Heading>
              <p className="mt-1.5 text-sm text-muted">
                Update your idea details below.
              </p>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  {/* Title */}
                  <TextField name="ideaTitle" variant="secondary">
                    <Label>Idea Title</Label>
                    <Input
                      name="ideaTitle"
                      value={form.ideaTitle}
                      onChange={handleChange}
                      placeholder="Enter idea title"
                    />
                  </TextField>

                  {/* Short Description */}
                  <TextField name="shortDescription" variant="secondary">
                    <Label>Short Description</Label>
                    <Input
                      name="shortDescription"
                      value={form.shortDescription}
                      onChange={handleChange}
                      placeholder="Enter short description"
                    />
                  </TextField>

                  {/* Status */}
                  <TextField name="status" variant="secondary">
                    <Label>Status</Label>
                    <select
                      name="status"
                      value={form.status}
                      onChange={handleChange}
                      className="w-full rounded-lg border px-3 py-2 text-sm"
                    >
                      <option value="Draft">Draft</option>
                      <option value="Published">Published</option>
                    </select>
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>

            {/* Footer */}
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>

              <Button onClick={handleSubmit} slot="close">
                Update Idea
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;
