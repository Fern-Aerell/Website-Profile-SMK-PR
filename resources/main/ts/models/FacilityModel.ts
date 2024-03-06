class FacilityModel {
  public image: string;
  public name: string;
  public description: string;

  constructor(image: string, name: string, description: string) {
    this.image = image;
    this.name = name;
    this.description = description;
  }

  public fromJson(data: string) {
    const dataParse = JSON.parse(data);
    this.image = dataParse.image;
    this.name = dataParse.name;
    this.description = dataParse.description;
  }

  public toJson() {
    const data = {
      image: this.image,
      name: this.name,
      description: this.description
    };
    return JSON.stringify(data);
  }
}

export default FacilityModel;
