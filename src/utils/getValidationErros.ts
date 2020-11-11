import { ValidationError } from 'yup';

interface Erros {
  [key: string]: string; // diz que a chave/nome da variavel pode ser qualquer coisa desde que seja um string
}

export default function getValidationErros(err: ValidationError): Erros {
  const validationErros: Erros = {};

  err.inner.forEach(error => {
    validationErros[error.path] = error.message;
  });

  return validationErros;
}
