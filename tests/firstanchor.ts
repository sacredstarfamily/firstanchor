import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Firstanchor } from "../target/types/firstanchor";

describe("firstanchor", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Firstanchor as Program<Firstanchor>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
