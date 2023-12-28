import * as vscode from "vscode";

export class JsonnetDebugAdapterDescriptorFactory
  implements vscode.DebugAdapterDescriptorFactory {
  context: vscode.ExtensionContext;

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
  }

  createDebugAdapterDescriptor(
    session: vscode.DebugSession,
    executable: vscode.DebugAdapterExecutable | undefined,
  ): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {
    if (!executable) {
      return new vscode.DebugAdapterExecutable("jsonnice", ["-d"]);
    }
    return executable;
  }
}
export class NetDapFactory implements vscode.DebugAdapterDescriptorFactory {
  createDebugAdapterDescriptor(
    session: vscode.DebugSession,
    executable: vscode.DebugAdapterExecutable | undefined,
  ): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {
    return new vscode.DebugAdapterServer(54321);
  }

  dispose() { }
}
