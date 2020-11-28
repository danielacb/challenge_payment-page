import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  MenuItem,
  Select,
  createMuiTheme,
  ThemeProvider,
  FormHelperText,
  FormControl,
  InputLabel,
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3C3C3C",
    },
  },
  typography: {
    fontFamily: ["Verdana", "Geneva", "sans-serif"].join(","),
  },
});

export default function Form() {
  const installments = [
    {
      value: "one-times",
      label: "R$1.059,00 à vista",
    },
    {
      value: "two-times",
      label: "2x de R$ 529,50 sem juros",
    },
    {
      value: "three-times",
      label: "3x de R$ 353,00 sem juros",
    },
    {
      value: "four-times",
      label: "4x de R$ 264,75  sem juros",
    },
  ];

  const { register, handleSubmit, errors, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          inputRef={register({ required: "Número de cartão inválido" })}
          id="number"
          name="number"
          type="number"
          label="Número do cartão"
          pattern="[\d| ]{16,22}"
          error={!!errors.number}
          helperText={errors.number ? errors.number.message : " "}
          fullWidth
        />
        <TextField
          inputRef={register({ required: "Insira seu nome completo" })}
          id="name"
          name="name"
          type="text"
          label="Nome (igual ao cartão)"
          fullWidth
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : " "}
        />
        <div className="col-2">
          <TextField
            inputRef={register({ required: "Data inválida" })}
            id="expiry"
            name="expiry"
            type="number"
            label="Validade"
            pattern="dd/dd"
            fullWidth
            error={!!errors.expiry}
            helperText={errors.expiry ? errors.expiry.message : " "}
          />
        </div>
        <div className="col-2">
          <TextField
            inputRef={register({ required: "Código inválido" })}
            id="cvv"
            name="cvv"
            type="number"
            className="info"
            label="CVV"
            width="50%"
            fullWidth
            error={!!errors.cvv}
            helperText={errors.cvv ? errors.cvv.message : " "}
          />
        </div>
        <FormControl fullWidth error={Boolean(errors.installment)}>
          <InputLabel id="intallment">Número de parcelas</InputLabel>
          <Controller
            as={
              <Select>
                {installments.map((option) => (
                  <MenuItem
                    key={option.value}
                    name={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            }
            name="installment"
            id="installment"
            rules={{ required: "Insira o número de parcelas" }}
            control={control}
            defaultValue=""
          />
          <FormHelperText>
            {errors.installment ? errors.installment.message : " "}
          </FormHelperText>
        </FormControl>
        <button type="submit">Continuar</button>
      </form>
    </ThemeProvider>
  );
}
