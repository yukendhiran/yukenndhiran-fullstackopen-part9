{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_20            # Node.js runtime
    pkgs.nodePackages.ts-node
    pkgs.nodePackages.typescript # TypeScript compiler (tsc)
  ];

  # Optionally, set up environment variables
  NODE_PATH = "$NODE_PATH:${pkgs.nodejs}/lib/node_modules";

  shellHook = ''
    echo "Node.js $(node -v) and TypeScript $(tsc -v) are ready for development!"
  '';
}
