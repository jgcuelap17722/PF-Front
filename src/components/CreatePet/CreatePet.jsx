import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import NavBar from "../../assets/NavBar/NavBar";
import Footer from "../../assets/Footer/Footer";
import s from "../../css/CreatePet.module.css";
import { catBreeds } from "../../assets/dataMockups/catBreed.js";
import { dogBreeds } from "../../assets/dataMockups/dogBreed.js";
import { InfoApi } from "../../assets/dataMockups/InfoApi.js";
import axios from "axios";

export default function CreatePet() {
  const allColors = InfoApi.map((p) => p.colors.primary);
  const colors = allColors.filter((c, index) => allColors.indexOf(c) === index);
  const form = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    console.log("formData: ", formData.get("photos"));

    for (let i = 0; i < data.photos.length; i++) {
      formData.append("photos", data.photos[i]);
    }
    formData.append("nombre", data.nombre);
    console.log("data: ", data);

    console.log("formData: X2 ", formData.getAll("photos"));
    const response = await axios.post(
      "http://localhost:5000/api/v1.0/pets/upload",
      formData
    );
    console.log("data: ", response.data);
  };

  console.log(errors);

  return (
    <div>
      <NavBar />
      <div className={s.container}>
        <div className={s.left}>
          <div className={s.overflow}></div>
        </div>
        <div className={s.right}>
          <form onSubmit={handleSubmit(onSubmit)} ref={form}>
            <div>
              <select>
                <option value="" disabled selected hidden>
                  Tipo
                </option>
                <option value="cat">Gato</option>
                <option value="dot">Perro</option>
              </select>
              {errors?.type && <p className={s.error}>{errors.type.message}</p>}
            </div>

            <div>
              <select>
                <option value="" disabled selected hidden>
                  Raza
                </option>
                <option value="siamesse">Siamesse</option>
              </select>
              {errors?.breed && (
                <p className={s.error}>{errors.breed.message}</p>
              )}
            </div>
            <div>
              <select>
                <option value="" disabled selected hidden>
                  Edad
                </option>
                <option value="puppy">Cachorro</option>
                <option value="young">Joven</option>
                <option value="adult">Adulto</option>
                <option value="senior">Mayor</option>
              </select>
              {errors?.age && <p className={s.error}>{errors.age.message}</p>}
            </div>
            <div>
              <input
                type="text"
                {...register("nombre")}
                placeholder="Nombre de tu mascota"
              />
              {errors?.petName && (
                <p className={s.error}>{errors.petName.message}</p>
              )}
            </div>
            <div>
              <select>
                <option value="" disabled selected hidden>
                  Género
                </option>
                <option value="male">Macho</option>
                <option value="female">Hembra</option>
              </select>
              {errors?.genre && (
                <p className={s.error}>{errors.genre.message}</p>
              )}
            </div>
            <div>
              <select>
                <option value="" disabled selected hidden>
                  Tamaño
                </option>
                <option value="small">Pequeño</option>
                <option value="medium">Mediano</option>
                <option value="large">Grande</option>
              </select>
              {errors?.size && <p className={s.error}>{errors.size.message}</p>}
            </div>
            <div>
              <select>
                <option value="" disabled selected hidden>
                  Color
                </option>
                <option value="black">Negro</option>
                {colors && colors.map((c) => <option value={c}>{c}</option>)}
              </select>
              {errors?.color && (
                <p className={s.error}>{errors.color.message}</p>
              )}
            </div>
            <div>
              <select>
                <option value="" disabled selected hidden>
                  Tipo de Pelo
                </option>
                <option value="hairless">Sin Pelo</option>
                <option value="short">Corto</option>
                <option value="medium">Medio</option>
                <option value="large">Largo</option>
                <option value="wire">Alambre</option>
                <option value="curly">Crespo</option>
              </select>
              {errors?.hairType && (
                <p className={s.error}>{errors.hairType.message}</p>
              )}
            </div>
            <div>
              <select>
                <option value="" disabled selected hidden>
                  Vacunas
                </option>
                <option value="true">Si</option>
                <option value="false">No</option>
              </select>
              {errors?.vaccines && (
                <p className={s.error}>{errors.vaccines.message}</p>
              )}
            </div>
            <div>
              <select>
                <option value="" disabled selected hidden>
                  Castrado
                </option>
                <option value="true">Si</option>
                <option value="false">No</option>
              </select>
              {errors?.castrated && (
                <p className={s.error}>{errors.castrated.message}</p>
              )}
            </div>
            <div>
              <select>
                <option value="" disabled selected hidden>
                  Cuidados Especiales
                </option>
                <option value="true">Si</option>
                <option value="false">No</option>
              </select>
              {errors?.specialCares && (
                <p className={s.error}>{errors.specialCares.message}</p>
              )}
            </div>
            <div>
              <input type="file" multiple {...register("photos")} />
            </div>

            <button type="submit">Crear Mascota</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
