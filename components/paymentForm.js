import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

const theme = createMuiTheme({
  labelAsterisk: {
    color: "#000",
  },
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

  const schema = object().shape({
    name: string().required("Username is required"),
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  function handleState() {
    console.log("sdasdsd");
  }

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          inputRef={register}
          id="number"
          name="number"
          type="number"
          label="Número do cartão"
          pattern="[\d| ]{16,22}"
          error={!!errors.number}
          helperText={errors.number ? errors.number.message : ""}
          fullWidth
        />
        <TextField
          inputRef={register}
          id="name"
          name="name"
          type="text"
          label="Nome (igual ao cartão)"
          fullWidth
        />
        <div className="col-2">
          <TextField
            inputRef={register}
            id="expiry"
            name="expiry"
            type="number"
            label="Validade"
            fullWidth
            inputProps={{ pattern: "dd/dd" }}
          />
        </div>
        <div className="col-2">
          <TextField
            inputRef={register}
            id="cvv"
            name="name"
            type="number"
            className="info"
            label="CVV"
            width="50%"
            fullWidth
          />
        </div>
        <TextField
          inputRef={register}
          defaultValue=""
          id="installment"
          select
          label="Número de parcelas"
          fullWidth
        >
          {installments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <button type="submit">Continuar</button>
      </form>
    </ThemeProvider>
  );
}
