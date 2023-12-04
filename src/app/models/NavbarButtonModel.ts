class NavbarButtonModel {
  public name: string;
  public id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }

  public fromJson(data: string) {
    const dataParse = JSON.parse(data);
    this.name = dataParse.name;
    this.id = dataParse.id;
  }

  public toJson() {
    const data = {
      name: this.name,
      id: this.id
    };
    return JSON.stringify(data);
  }
}

export default NavbarButtonModel;
