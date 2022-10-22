/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

export class EntrenamientoColaborativo {
  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse;    
  }

  async getColaboradores() {
    return await this.wallet.viewMethod({ contractId: this.contractId, method: 'get_colaboradores' });
  }

  async setColaborador(datasetId) {
    return await this.wallet.callMethod({ contractId: this.contractId, method: 'set_colaborador', args: { dataset_id: datasetId } });
  }
}