import { Builder } from "../implementations/builder-pattern.js";

const invoice = Builder.create("widget")
  .setAmount(2)
  .setCost(2000)
  .setTaxRate(0.1)
  .build();
