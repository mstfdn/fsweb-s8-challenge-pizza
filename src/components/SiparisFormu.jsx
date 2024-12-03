// src/components/SiparisFormu.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #CE2829;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const Section = styled.section`
  position: relative;
  padding: 20px;
  background-color: #f7f7f7;
`;

const PositionAbsoluteTitle = styled.h2`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
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

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const RedStar = styled.span`
  color: red;
  margin-right: 5px;
`;

const SelectGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 0;
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

const TotalSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const TotalPrice = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  color: #d32f2f;
`;

function SiparisFormu() {
  const navigate = useNavigate(); // Initialize navigate
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Ekstra malzeme seçimleri
  const handleExtrasChange = (e) => {
    const { value, checked } = e.target;
    setExtras((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  // Sipariş formunu gönderme
  const handleSubmit = (e) => {
    e.preventDefault();
    // Sipariş verildiğinde, kullanıcının sipariş onay sayfasına yönlendirilmesi
    
    navigate('/onay'); // Redirect to the SiparisOnayi page
  };

  // Fiyat hesaplama fonksiyonu
  const calculateTotal = () => {
    const basePrice = 85.5; // Pizza fiyatı
    const extraPrice = extras.length * 5; // Ekstra malzeme fiyatı
    return (basePrice + extraPrice) * quantity; // Toplam fiyat hesaplaması
  };

  return (
    <Container>
      <Header>
        <h1>Teknolojik Yemekler</h1>
        <Nav>
          <a href="/">Anasayfa</a>
          <a href="/siparis">Sipariş Oluştur</a>
        </Nav>
      </Header>

      <Section>
        <PositionAbsoluteTitle>Acı Pizza</PositionAbsoluteTitle>

        <PriceSection>
          <Price>85.50₺</Price>
          <Rating>
            <span>4.9</span> (200)
          </Rating>
        </PriceSection>

        <Description>
        Frontend Dev olarak hala position absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizetta denir.
        </Description>

        <RadioGroup>
          <RedStar>*</RedStar> Boyut Seç
          <div>
            <input
              type="radio"
              id="small"
              value="small"
              checked={size === 'small'}
              onChange={(e) => setSize(e.target.value)}
            />
            <label htmlFor="small">Küçük</label>

            <input
              type="radio"
              id="medium"
              value="medium"
              checked={size === 'medium'}
              onChange={(e) => setSize(e.target.value)}
            />
            <label htmlFor="medium">Orta</label>

            <input
              type="radio"
              id="large"
              value="large"
              checked={size === 'large'}
              onChange={(e) => setSize(e.target.value)}
            />
            <label htmlFor="large">Büyük</label>
          </div>
        </RadioGroup>

        <SelectGroup>
          <RedStar>*</RedStar> Hamur Seç
          <MultiSelect onChange={(e) => setDough(e.target.value)} value={dough}>
            <option value="">Hamur Türü Seçin</option>
            <option value="thin">İnce</option>
            <option value="thick">Kalın</option>
          </MultiSelect>
        </SelectGroup>

        <h3>Ek Malzemeler</h3>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <CheckboxGroup>
          {['pepperoni', 'sosis', 'kanadaJambonu', 'tavukIzgara', 'soğan', 'domates', 'mısır', 'sucuk', 'jalepeno', 'sarımsak', 'biber', 'ananas', 'kabak'].map((item) => (
            <CheckboxLabel key={item}>
              <input
                type="checkbox"
                value={item}
                onChange={handleExtrasChange}
              />
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
          <div>
            <p>Seçimler: {extras.length * 5}₺</p>
            <p>Toplam: {calculateTotal()}₺</p>
          </div>
        </TotalSection>

        <button onClick={handleSubmit}>SİPARİŞ VER</button>
      </Section>
    </Container>
  );
}

export default SiparisFormu;
