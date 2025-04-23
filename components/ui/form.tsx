"use client"

import * as React from "react"
import { useForm } from "react-hook-form"

import { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField } from "@/components/Form"

const ContactForm = () => {
  const { handleSubmit, control } = useForm()

  const onSubmit = (data: any) => {
    // O formulário será enviado automaticamente para Formsubmit
    // Não é necessário fazer mais nada aqui, pois o envio é tratado no action do form
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <form
        action="https://formsubmit.co/qbistudioai@gmail.com"
        method="POST"
        className="space-y-4"
      >
        {/* Nome */}
        <FormField name="name" control={control} rules={{ required: "Nome é obrigatório" }}>
          <FormItem>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <FormControl>
              <input
                id="name"
                name="name"
                placeholder="Seu nome"
                className="input"
                required
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        {/* Email */}
        <FormField name="email" control={control} rules={{ required: "Email é obrigatório" }}>
          <FormItem>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormControl>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Seu email"
                className="input"
                required
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        {/* Mensagem */}
        <FormField name="message" control={control} rules={{ required: "Mensagem é obrigatória" }}>
          <FormItem>
            <FormLabel htmlFor="message">Mensagem</FormLabel>
            <FormControl>
              <textarea
                id="message"
                name="message"
                placeholder="Sua mensagem"
                className="input"
                required
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        {/* Campos Ocultos para Formsubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://qbifv2.github.io/meu-site-v0/aplicativo/obrigado.html"
        />

        {/* Botão de Envio */}
        <button type="submit" className="btn">
          Enviar
        </button>
      </form>
    </Form>
  )
}

export default ContactForm
