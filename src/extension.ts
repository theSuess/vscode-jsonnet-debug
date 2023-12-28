import * as vscode from "vscode";
import { JsonnetDebugAdapterDescriptorFactory, NetDapFactory } from "./dap";

const DEBUG_ADAPTER_ID = "jsonnet";

export async function activate(context: vscode.ExtensionContext) {
	// Launches the DAP server
	// vscode.debug.registerDebugAdapterDescriptorFactory(
	// 	DEBUG_ADAPTER_ID,
	// 	new JsonnetDebugAdapterDescriptorFactory(context),
	// );
	vscode.debug.registerDebugAdapterDescriptorFactory(
		DEBUG_ADAPTER_ID,
		new NetDapFactory(),
	);
}

export async function deactivate() { }
