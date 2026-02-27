// Skills API

export class SkillsApi {
  constructor(client) {
    this.client = client;
  }

  async list() {
    return this.client.get('/api/skills');
  }

  async get(id) {
    if (!id) throw new Error('Skill ID is required');
    return this.client.get(`/api/skills/${id}`);
  }
}
