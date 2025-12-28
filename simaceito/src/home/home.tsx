import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./home.css";

const lugares = [
  {
    name: "Espaço Gigioli Eventos",
    images: [
      "https://scontent.fbau3-2.fna.fbcdn.net/v/t39.30808-6/484572816_1137257678198001_5312651226167513804_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s3TQJUBXrbsQ7kNvwFkPRlW&_nc_oc=Admstf5-t-5abF_xf2YZezxbono18xeywma8FHkY55IRKEpIqtBoG-bxZlFhpjWVYwuF8srpQALmctxwvdG-5-oT&_nc_zt=23&_nc_ht=scontent.fbau3-2.fna&_nc_gid=Q7F_tnjmiyvXA4a-8tFvPw&oh=00_AfnicAKfDejeX55TZJEzMzMuZ0V7sEmtW_eks3isJ4dt1A&oe=695794AE",
      "https://scontent.fbau3-2.fna.fbcdn.net/v/t39.30808-6/485088071_1137257621531340_641440571297943358_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zU3YdpnkxlAQ7kNvwEoSOvz&_nc_oc=AdljAGYoqh-8IWgUrXioYRkVi9_eEDYSu9id2MO6eNgI2sBJTR11rHNGj_5HFg8744l67QX9OyNr8_DwiNEOFyv2&_nc_zt=23&_nc_ht=scontent.fbau3-2.fna&_nc_gid=1ukm97Dc8D9-EuAorqY3CA&oh=00_AflhrAsCYc_F_x7h3UFue6H9z8OLVaouLzfIlVugQKpz0A&oe=695777C5",
      "https://scontent.fbau3-2.fna.fbcdn.net/v/t39.30808-6/485150588_1137257618198007_3401241983678256522_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7ttFHHrPh7wQ7kNvwGCSckW&_nc_oc=Adk9MaX33Xe_FTafvNezcmDXavSibvHZszvV7fmnpEIr_Lpo9zvsqoEuOgMPux_KOeeBOohCz4iEmNUQ1lAc8_vl&_nc_zt=23&_nc_ht=scontent.fbau3-2.fna&_nc_gid=6oGT7YjpaG5DYor6mrkqsQ&oh=00_AfniGRdnIjMSuoHFC6h-7hexg4mFWM_JKUOze0KyInFWJg&oe=6957657A",
    ],
  },
  {
    name: "Dom Toniolo Eventos ",
    images: [
      "https://scontent.fbau3-1.fna.fbcdn.net/v/t39.30808-6/481233350_592787280420295_5227419888367027482_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZnnaD9M8SPsQ7kNvwEtfpzm&_nc_oc=AdmplzojotVQ6JjaAF_d4_XZ-wv9aXumNkstLeLiXjGD8nr8VWWHhpxydv1oXPNFGioWyPFyVemapLPv1x-Z9UJ9&_nc_zt=23&_nc_ht=scontent.fbau3-1.fna&_nc_gid=3d82hVQCEKIo18wqGQjDtg&oh=00_AfmF0p0lB36OZdZqdENL69Rf-H_HctuoFMOIwWVO6bEcGQ&oe=695783B1",
      "https://scontent.fbau3-1.fna.fbcdn.net/v/t39.30808-6/480569616_587807184251638_5594536337427375027_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MnhmJEmgFusQ7kNvwGQDM0E&_nc_oc=AdnEsPCKFrwpDHwxrjvG7Ec4yVxGaxd1zJBPdxz-qqI09XVSM3XccFEA4dTUQaDdTWq9nFzu9KZ1SLwOt1aeqkG4&_nc_zt=23&_nc_ht=scontent.fbau3-1.fna&_nc_gid=zjZdth8TiJMUnbM8b_pt4Q&oh=00_AflcGBzf015ihm0nrfLPR3bfHIETrWOK4Lfjhhnjuq7crg&oe=69576E14",
      "https://scontent.fbau3-1.fna.fbcdn.net/v/t39.30808-6/480913091_585426467823043_672311811664581026_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mMWXcy7M6PoQ7kNvwGEA4eK&_nc_oc=AdmIFWtFHLCZhDa8La3ItqcqgK5gVvRRZp_4MXIpxw6X1CH0sYwO4G8kf7B03fkpn-QJtXuJWQiJyXZF-T3lvwjO&_nc_zt=23&_nc_ht=scontent.fbau3-1.fna&_nc_gid=EZWN16hZxUnYV7XnZc7PtA&oh=00_AflaRVWvPrGQp7RwIf5ADYQHZJ3Iju63SxNkNQ42lJvd3A&oe=695774A3",
    ],
  },
  {
    name: "Espaço Fazenda Fartura",
    images: [
      "https://scontent.fbau3-1.fna.fbcdn.net/v/t39.30808-6/482090156_579261461807836_3336459330397634421_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hmq_GLSTreEQ7kNvwFQdcKm&_nc_oc=AdmlQCmy2sVnIQlTY21kdZ_MGsSHoDGCYLvfbQPFmwOZFC3TuITSAL_yX_nQoKRAJknd8fB3HAd5hGkJ_0N9LYsw&_nc_zt=23&_nc_ht=scontent.fbau3-1.fna&_nc_gid=HjzxkUfATAMqkFlzB25YTQ&oh=00_Afl7f0V50fFqSI6MSnd_uc8F-3pimAT5DD-zjUgwEiWM2w&oe=6957A0B3",
      "https://scontent.fbau3-1.fna.fbcdn.net/v/t39.30808-6/566333964_759985233735457_4201557946936561598_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=s_NThK3z1icQ7kNvwGS56g1&_nc_oc=AdkUQ-t2h0E2cwt-ndZ4eow2Qx_S7XGS4LUkMDZcNsCqFX7qbt5aN0vDN0RqRaOH79sfddkihgUgQR4aPZF_q9Fw&_nc_zt=23&_nc_ht=scontent.fbau3-1.fna&_nc_gid=Z1tFD_wSyYOPuBWqCzmmYw&oh=00_AfkwO46VtiAe0uNKgZlQW9BtKRW9zeyPluIDNMtmFvRuPg&oe=69579D52",
      "https://scontent.fbau3-1.fna.fbcdn.net/v/t39.30808-6/481337141_579261648474484_389549604384464998_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=00GLDmlA9fcQ7kNvwEG2qhZ&_nc_oc=Adle4kkYgzZJWVktdvI9VJ1n3VGMO7am2mRYjBtmortmlhjG8u2ypnyGeSra212hZDTNbzLL-O7mdKJmdMxc12P0&_nc_zt=23&_nc_ht=scontent.fbau3-1.fna&_nc_gid=MqoJhCRRdkKdRV9Ti5P47w&oh=00_AfnnXBxiCWiaLXCOPA1wCp5XChMId7tHMLCrD3elMW2JyA&oe=69578F0A",
    ],
  },
];

const fotografo = [
  {
    name: "Fotógrafo Jean",
    images: [
      "https://scontent.fbau3-1.fna.fbcdn.net/v/t39.30808-6/600828621_1391015169061931_9077497718576023078_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IS38lY_HNrwQ7kNvwFXHTIP&_nc_oc=AdkkrFfynP1-jal-vyV8MKpKvZoJ_LNL1N_XDDEdNGo5Zji0FIwubDZTzZFc8lC6qBqvLsn028LAc5fbah8HRgIi&_nc_zt=23&_nc_ht=scontent.fbau3-1.fna&_nc_gid=GBRGil4rlwvoKa8kIcnOFA&oh=00_AflR43HsW4w3rZeVCObKalF1JQrQuijxawlm1g2u2nFO5A&oe=69578FD9",
      "https://images.unsplash.com/photo-1519741497674-611481863552",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    ],
  },
  {
    name: "Fotógrafo Amador",
    images: [
      "https://images.unsplash.com/photo-1519227355453-8f982e425321",
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    ],
  },
];

const decoracao = [
  {
    name: "Decoração Profissional",
    images: [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
      "https://images.unsplash.com/photo-1500534314209-a26db0f5a0f9",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="home">

        {/* HERO */}
        <section className="hero">
          <div>
            <h1>Tudo para o seu Grande Dia em um só lugar</h1>
            <p>
              Organize presentes, agenda, fornecedores e muito mais,
              de forma simples e elegante.
            </p>

            <div className="hero-buttons">
              <a href="/register" className="primary">Começar agora</a>
              <a href="/login" className="secondary">Já tenho conta</a>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="how">
          <div>
            <h2>Como funciona?</h2>

            <div className="steps">
              <div>
                <span>1</span>
                <h3>Crie sua conta</h3>
                <p>Cadastre-se gratuitamente e personalize o seu dia especial.</p>
              </div>

              <div>
                <span>2</span>
                <h3>Organize tudo</h3>
                <p>Lista de presentes, agenda e serviços em um só lugar.</p>
              </div>

              <div>
                <span>3</span>
                <h3>Compartilhe</h3>
                <p>Envie o link para seus convidados com facilidade.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <ServiceSection title="Contratar Lugar" items={lugares} />
        <ServiceSection title="Contratar Fotógrafo" items={fotografo} />
        <ServiceSection title="Contratar Decoração" items={decoracao} />

        {/* FEATURES */}
        <section className="features">
          <div>
            <h2>O que você pode fazer</h2>
            <ul>
              <li>🎁 Criar lista de presentes personalizada</li>
              <li>📝 Criar agenda do dia especial</li>
              <li>📅 Agendar serviços</li>
              <li>📸 Adicionar fotos e descrições</li>
              <li>🔐 Controle total com login seguro</li>
            </ul>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

/* ===== COMPONENTES ===== */

function ServiceSection({ title, items }: any) {
  return (
    <section className="services">
      <div>
        <h2>{title}</h2>

        <div className="services-grid">
          {items.map((item: any, index: number) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ item }: any) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(index === 0 ? item.images.length - 1 : index - 1);

  const next = () =>
    setIndex(index === item.images.length - 1 ? 0 : index + 1);

  return (
    <div className="service-card">
      <div className="service-image">
        <button className="arrow left" onClick={prev}>‹</button>
        <img src={item.images[index]} alt={item.name} />
        <button className="arrow right" onClick={next}>›</button>
      </div>

      <h3>{item.name}</h3>
      <button className="hire-btn">Contratar</button>
    </div>
  );
}
