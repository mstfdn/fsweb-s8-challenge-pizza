// src/components/SiparisFormu.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Ana konteyner bileşeni
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
`;

// Başlık bileşeni
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #CE2829;
  color: white;
`;

// Navigasyon bileşeni
const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

// Navigasyon bağlantısı bileşeni
const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};

  &:hover {
    text-decoration: underline;
  }
`;

// Ana içerik bölümü
const Section = styled.section`
  position: relative;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

// Başlık
const PositionAbsoluteTitle = styled.h2`
  position: absolute;
  left: 20px;
  top: 10px;
`;

// Fiyat bölümü
const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  font-size: 1.5rem;
`;

const Price = styled.span`
  font-weight: bold;
`;

const Rating = styled.span`
  text-align: right;
`;

const Description = styled.p`
  margin-top: 20px;
`;

// Radyo buton grubu
const RadioGroup = styled.div`
  display: flex;
  flex-direction: column; /* Sütun düzeni */
  align-items: flex-start; /* Sol tarafa dayalı */
  margin: 10px 0;
  gap: 10px; /* Radio butonlar arasındaki boşluk */
`;

const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center; /* Metin ve buton hizalaması */
  gap: 5px; /* Buton ve metin arası boşluk */
`;

const RadioLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

// Kırmızı yıldız bileşeni
const RedStar = styled.span`
  color: red;
  margin-right: 5px;
`;

// Seçim grubu
const SelectionContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Boyut ve hamur kısımlarını uçlara hizalar */
  align-items: flex-start; /* Üst kısımdan hizalar */
  gap: 20px; /* İki bölüm arasına boşluk ekler */
  margin: 10px 0;
`;

const SelectGroup = styled.div`
  display: flex;
  flex-direction: column; /* Select öğesini alt alta sıralar */
  align-items: flex-start; /* Sağ tarafa hizalar */
  gap: 5px; /* Hamur seç yazısı ile select öğesi arasında boşluk */
`;

const MultiSelect = styled.select`
  padding: 5px;
  margin-left: 10px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  height: 100px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Divider = styled.hr`
  margin: 20px 0;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;

const QuantityButton = styled.button`
  padding: 5px 15px;
  margin: 0 10px;
  background-color: #fbc02d;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f9a825;
  }
`;

// Seçim ve toplam fiyat bölümünü sağ alt köşeye yerleştiriyoruz
const TotalSection = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column; /* Dikey sıralama */
  align-items: flex-end; /* Sağ tarafa hizalama */
`;

// Seçimler yazısı
const SelectionsText = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px; /* Üst boşluk */
`;

// Toplam fiyat yazısı
const TotalPrice = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  color: #d32f2f; /* Kırmızı renk */
`;





const OrderButton = styled.button`
  background-color: #fbc02d;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;

  &:hover {
    background-color: #f9a825;
  }
`;

function SiparisFormu() {
  const navigate = useNavigate();
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleExtrasChange = (e) => {
    const { value, checked } = e.target;
    setExtras((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/onay');
  };

  const calculateTotal = () => {
    const basePrice = 85.5;
    const extraPrice = extras.length * 5;
    return (basePrice + extraPrice) * quantity;
  };

  return (
    <Container>
      <Header>
        <h1>Teknolojik Yemekler</h1>
        <Nav>
          <NavLink href="/" bold={false}>
            Anasayfa
          </NavLink>
          <NavLink href="/seçenekler" bold={false}>
            Seçenekler
          </NavLink>
          <NavLink href="/siparis" bold={true}>
            Sipariş Oluştur
          </NavLink>
        </Nav>
      </Header>

      <Section>
        <PositionAbsoluteTitle>Position Absolute Acı Pizza</PositionAbsoluteTitle>

        <PriceSection>
          <Price>85.50₺</Price>
          <Rating>
            <span>4.9</span> (200)
          </Rating>
        </PriceSection>

        <Description>
          Frontend Dev olarak hala position absolute kullanıyorsan bu çok acı pizza tam
          sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle
          kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek
          sıcaklıkta pişirilen genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı
          hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen
          pizetta denir.
        </Description>

        <SelectionContainer>
  {/* Boyut Seç */}
  <RadioGroup>
    <RadioLabel>
      <RedStar>*</RedStar>
      <span>Boyut Seç</span>
    </RadioLabel>
    <RadioButtonContainer>
      <input
        type="radio"
        id="small"
        value="small"
        checked={size === 'small'}
        onChange={(e) => setSize(e.target.value)}
      />
      <label htmlFor="small">Küçük</label>
    </RadioButtonContainer>
    <RadioButtonContainer>
      <input
        type="radio"
        id="medium"
        value="medium"
        checked={size === 'medium'}
        onChange={(e) => setSize(e.target.value)}
      />
      <label htmlFor="medium">Orta</label>
    </RadioButtonContainer>
    <RadioButtonContainer>
      <input
        type="radio"
        id="large"
        value="large"
        checked={size === 'large'}
        onChange={(e) => setSize(e.target.value)}
      />
      <label htmlFor="large">Büyük</label>
    </RadioButtonContainer>
  </RadioGroup>

  {/* Hamur Seç */}
  <SelectGroup>
    <label htmlFor="dough">
      <RedStar>*</RedStar> Hamur Seç
    </label>
    <MultiSelect
      id="dough"
      onChange={(e) => setDough(e.target.value)}
      value={dough}
    >
      <option value="">Hamur Türü Seçin</option>
      <option value="thin">İnce</option>
      <option value="thick">Kalın</option>
    </MultiSelect>
  </SelectGroup>
</SelectionContainer>


        <h3>Ek Malzemeler</h3>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <CheckboxGroup>
          {[
            'pepperoni',
            'sosis',
            'kanada Jambonu',
            'Tavuk Izgara',
            'soğan',
            'domates',
            'mısır',
            'sucuk',
            'jalepeno',
            'sarımsak',
            'biber',
            'ananas',
            'kabak',
          ].map((item) => (
            <CheckboxLabel key={item}>
              <input type="checkbox" value={item} onChange={handleExtrasChange} />
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>

        <h3>Sipariş Notu</h3>
        <Textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Siparişine eklemek istediğin bir not var mı?"
        />

        <Divider />

        <QuantityControl>
          <QuantityButton onClick={() => setQuantity(quantity - 1)}>-</QuantityButton>
          <span>{quantity}</span>
          <QuantityButton onClick={() => setQuantity(quantity + 1)}>+</QuantityButton>
        </QuantityControl>

        <TotalSection>
  <SelectionsText>Seçimler: {extras.length * 5}₺</SelectionsText>
  <TotalPrice>Toplam: {calculateTotal()}₺</TotalPrice>
</TotalSection>



        <OrderButton onClick={handleSubmit}>Siparişi Tamamla</OrderButton>
      </Section>
    </Container>
  );
}

export default SiparisFormu;
