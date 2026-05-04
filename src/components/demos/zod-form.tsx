"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";

const contentSchema = z.object({
  title: z.string().min(5, "O título precisa ter pelo menos 5 caracteres"),
  description: z.string().min(15, "A descrição precisa ter pelo menos 15 caracteres"),
  type: z.enum(["VIDEO", "ARTICLE", "QUIZ"], { message: "Selecione o tipo de conteúdo" }),
});

type ContentForm = z.infer<typeof contentSchema>;

export const zodFormCode = `import { z } from "zod";

export const createContentInput = z.object({
  title: z.string().min(5),
  description: z.string().min(15),
  type: z.enum(["VIDEO", "ARTICLE", "QUIZ"]),
});

export const contentRouter = router({
  create: adminProcedure
    .input(createContentInput)
    .mutation(({ input, ctx }) => ctx.container.content.create(input)),
});
`;

export function ZodFormDemo() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContentForm>({
    resolver: zodResolver(contentSchema),
  });

  const onSubmit = async () => {
    setSuccess(false);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSuccess(true);
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-xl border border-slate-700/50 bg-slate-900 p-6 shadow-xl">
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white">Criar novo conteúdo</h4>
        <p className="text-sm text-slate-400">Validação tipada com Zod</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FieldError label="Título da aula" error={errors.title?.message}>
          <input
            {...register("title")}
            className={cn(
              "w-full rounded-lg border bg-slate-800 px-4 py-2 text-white focus:outline-none focus:ring-2",
              errors.title ? "border-red-500/50 focus:ring-red-500/50" : "border-slate-700 focus:ring-sky-500/50",
            )}
            placeholder="Ex: Introdução a Clean Architecture"
          />
        </FieldError>

        <FieldError label="Descrição" error={errors.description?.message}>
          <textarea
            {...register("description")}
            className={cn(
              "h-24 w-full resize-none rounded-lg border bg-slate-800 px-4 py-2 text-white focus:outline-none focus:ring-2",
              errors.description ? "border-red-500/50 focus:ring-red-500/50" : "border-slate-700 focus:ring-sky-500/50",
            )}
            placeholder="Descreva os tópicos principais..."
          />
        </FieldError>

        <FieldError label="Tipo" error={errors.type?.message}>
          <select
            {...register("type")}
            className={cn(
              "w-full rounded-lg border bg-slate-800 px-4 py-2 text-white focus:outline-none focus:ring-2",
              errors.type ? "border-red-500/50 focus:ring-red-500/50" : "border-slate-700 focus:ring-sky-500/50",
            )}
          >
            <option value="">Selecione...</option>
            <option value="VIDEO">Videoaula</option>
            <option value="ARTICLE">Artigo</option>
            <option value="QUIZ">Questionário</option>
          </select>
        </FieldError>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 py-2.5 font-medium text-white transition-colors hover:bg-sky-500 disabled:opacity-70"
        >
          {isSubmitting ? "Salvando..." : <><Save size={18} /> Salvar conteúdo</>}
        </button>

        {success && (
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-400">
            <CheckCircle2 size={16} /> Conteúdo validado com sucesso.
          </div>
        )}
      </form>
    </div>
  );
}

function FieldError({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-300">{label}</label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}
