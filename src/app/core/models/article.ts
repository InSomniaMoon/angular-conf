

export class Article {

  constructor(private id?: number,
    private nom?: string,
    private type?: "PANTALON" | "T-SHIRT" | "HOODIE",
    private description?: string) {
  }

  /**
   * getId
   */
  public getId() {
    return this.id;
  }

  /**
   * get
   */
  public getNom() {
    return this.nom;
  }

  /**
   * get
   */
  public getDescription() {
    return this.description;
  }

  /**
   * get
   */
  public getType() {
    return this.type;
  }


  /**
   * setId
   */
  public setId(v: number) {
    this.id = v;
    return this;
  }


  /**
   * setId
   */
  public setNom(v: string) {
    this.nom = v;
    return this;
  }


  /**
   * setId
   */
  public setDescription(v: string) {
    this.description = v;
    return this;
  }


  /**
   * setId
   */
  public setType(v: "PANTALON" | "T-SHIRT" | "HOODIE") {

    this.type = v;
    return this;
  }

}
