#!/usr/bin/env node

import fs from "fs";
import { Command } from "commander";
import { log } from "console";

const program = new Command();

program
  .name("string-util")
  .description("CLI to some JavaScript string utilities")
  .version("0.8.0");

program
  .argument("<string>", "string to log")
  .action((message: string = "Andrew") => {
    console.log(`Hello ${message}`);
  })
  .description("Say hello");

program
  .command("add <numbers...>")
  .action((numbers: number[]) => {
    const total = numbers.reduce((a, b) => a + b, 0);
    console.log(`Total: ${total}`);
  })
  .description("Add numbers and log the total");

program
  .command("get-max-number <numbers...>")
  .action((numbers: number[]) => {
    const max = Math.max(...numbers);
    console.log(`Max: ${max}`);
  })
program.parse(process.argv);
