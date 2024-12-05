import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Label } from 'reactstrap';
import Footer from './Footer';

const Container = styled.div`
  font-family: Arial, sans-serif;
  
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  color: white;
  background-color: red;
  position: relative; /* Header'ın pozisyonu ayarlandı */
  z-index: 2;
`;

const HeaderImage = styled.img`
  width: 70%;
  height: 300px;
  object-fit: cover;
  position: absolute;
  bottom: -100px;
  z-index: -1;
  clip-path: ellipse(60% 60% at 50% 100%); /* Pizzanın alt yarısını göstermek için clip-path */
`;

const PizzaImageSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: -100px; /* Header'ın üstünden mesafe */
`;

const PizzaImage = styled.img`
  width: 30%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const NavContainer = styled.div`
  
  display: flex;
  justify-content: flex-start;
  gap: 5px; /* Öğeler arasındaki boşluk */
  margin: 20px 0;
  padding-left: 895px; /* Section ile hizalamak için sol boşluk */
`;

const NavLink = styled.a`
  color: ${(props) => (props.isRed ? 'red' : 'black')};
  text-decoration: none;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  font-size: 1rem; /* Section yazı boyutuna uygun hale getirildi */
  line-height: 1.5; /* Daha düzgün hizalama için satır yüksekliği */
  position: relative;

  &:after {
    content: '-';
    color: black;
    margin-left: 3px; /* Çizgi ile metin arasındaki boşluk */
  }

  &:last-child:after {
    content: ''; /* Son öğede çizgiyi kaldır */
  }

  &:hover {
    text-decoration: underline;
  }
`;




const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  font-size: 0.9rem;
`;

const PositionAbsoluteTitle = styled.h2`
  position: absolute;
  left: 20px;
  top: 10px;
`;

const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  font-size: 1.3rem;
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
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0;
  gap: 10px;
`;

const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;

const RadioInput = styled.input`
  width: 20px;  /* Radio buton boyutunu büyütür */
  height: 20px;
  cursor: pointer;
  appearance: none; /* Varsayılan stilini kaldırır */
  border: 2px solid #000;
  border-radius: 4px; /* Kare köşe görünümünü sağlar */
  background-color: white;
  transition: all 0.3s ease;  /* Yumuşak geçiş efekti */

  &:checked {
    background-color: red; /* Seçili durumda kırmızı arkaplan */
    border-color: red; /* Sınır rengini kırmızı yapar */
  }

  &:checked + label {
    color: black; /* Yazı rengini siyah yapar */
  }
`;

const RadioLabel = styled.label`
  display: flex;
  cursor: pointer;
  font-size: 1rem;
`;

const RedStar = styled.span`
  color: red;
  margin-right: 5px;
`;

const SelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin: 10px 0;
  
`;

const CustomSelect = styled.select`
  position: relative;
  left: -2px;
  top: 10px;
  width: 40%;
  padding: 12px 20px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  appearance: none; /* Varsayılan select okunu kaldırır */
  background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-3 0 22 22%22 fill=%22none%22%3E%3Cpath fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M8.3 6.7L11.6 10 8.3 13.3C7.9 13.7 7.2 13.6 6.8 13.2C6.4 12.8 6.5 12.1 6.9 11.7L9.2 9.3H3.8C3.3 9.3 2.9 8.9 2.9 8.3C2.9 7.8 3.3 7.4 3.8 7.4H9.2L6.9 5.1C6.5 4.7 6.4 4 6.8 3.6C7.2 3.2 7.9 3.3 8.3 3.7L11.6 7.3L8.3 6.7Z%22 fill=%22%23ccc%22/%3E%3C/svg%3E'); 
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #f9a825;
  }

  &:hover {
    border-color: #f9a825;
  }
`;

const SelectGroup = styled.div`
  position: relative;
  left: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
`;



const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  justify-content: flex-start;
`;

const SectionTitle = styled.h3`
  text-align: left;
  width: 100%;
`;

const InfoText = styled.p`
  text-align: left;
  width: 100%;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input`
  width: 20px;  /* Checkbox boyutunu büyütür */
  height: 20px;
  margin-right: 10px; /* Checkbox ile yazı arasındaki boşluk */
  transition: all 0.3s ease;  /* Yumuşak geçiş efekti */

  &:checked {
    background-color: yellow; /* Arkaplan rengini sarı yapar */
    border-color: yellow;  /* Border rengini sarı yapar */
  }

  &:checked + label {
    color: black; /* Yazı rengini siyah yapar */
  }

  
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
  padding: 10px 20px; /* Daha büyük iç boşluk */
  margin: 0 10px;
  background-color: #dbd9d5;
  border: none;
  border-radius: 10px; 
  cursor: pointer;
  font-size: 1.2rem; 
  width: 50px; 
  height: 50px; 

  &:hover {
    background-color: #f9a825;
  }
`;


const TotalSection = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const EndSection = styled.div`
  position: relative; /* Konumlandırmayı serbest bırakır */
  right: -150px;
  bottom: 80px;
  border: 1px  black;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  padding-left: 30px; /* Sol taraftan ekstra boşluk ekleyerek border'ı genişletir */
  display: flex;
  flex-direction: column; /* Alt alta dizme */
  align-items: flex-start; /* Sağ tarafa hizalama */
  background-color: #f5f1e6; /* Border arka plan rengini #f5f1e6 yapar */
  margin-bottom: 10px;
  padding-bottom: 120px; /* Footer ile çakışmayı engeller */
  width: 80%;
`;




const SelectionsText = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px;
  font-weight: bold;
  
`;

const TotalPrice = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  color: #d32f2f;
  margin-bottom: 10px; /* Price ile buton arasına boşluk ekler */
`;

const TotalOrder = styled.p`
  font-size: 24px;
`

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  box-sizing: border-box;
  
  button {
    width: 400px; /* Genişliği artırır */
    height: 60px; /* Yüksekliği artırır */
    font-size: 1.5rem; /* Yazı boyutunu büyütür */
    color: black; /* Yazı rengini siyah yapar */
    font-weight: bold; /* Yazıyı kalın (bold) yapar */
  }
`;

function SiparisFormu() {
  const navigate = useNavigate();
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const handleExtrasChange = (e) => {
    const { value, checked } = e.target;
    setExtras((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || name.length < 3) {
      setNameError('Lütfen en az 3 karakterlik bir isim girin!');
      return;
    }

    setNameError('');

    // Sipariş bilgilerini yerel depolamada sakla
    const orderDetails = {
      size,
      dough,
      extras,
      note,
      quantity,
      totalPrice: calculateTotal(),
    };
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

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
      </Header>
      <PizzaImageSection>
        <PizzaImage
          src="../Assets/Iteration-2-aseets/pictures/form-banner.png"
          alt="Pizza"
        />
      </PizzaImageSection>
      <NavContainer>
        <NavLink href="/">Anasayfa</NavLink>
        <NavLink href="/secenekler">Seçenekler</NavLink>
        <NavLink href="/siparisolustur" isRed>
          Sipariş Oluştur
        </NavLink>
      </NavContainer>
      <Section>
        <PositionAbsoluteTitle>Position Absolute Acı Pizza</PositionAbsoluteTitle>

        <PriceSection>
          <Price>85.50₺</Price>
          <Rating>
            <span>4.9</span> (200)
          </Rating>
        </PriceSection>

        <Description>
          Frontend Dev olarak hala position absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizetta denir.
        </Description>

        <SelectionContainer>
        <RadioGroup>
  <RadioLabel>
    <RedStar>*</RedStar>
    <span>Boyut Seç</span>
  </RadioLabel>
  <RadioButtonContainer>
    <RadioInput
      type="radio"
      id="küçük"
      value="küçük"
      checked={size === 'küçük'}
      onChange={(e) => setSize(e.target.value)}
    />
    <label htmlFor="küçük">Küçük</label>
  </RadioButtonContainer>
  <RadioButtonContainer>
    <RadioInput
      type="radio"
      id="orta"
      value="orta"
      checked={size === 'orta'}
      onChange={(e) => setSize(e.target.value)}
    />
    <label htmlFor="orta">Orta</label>
  </RadioButtonContainer>
  <RadioButtonContainer>
    <RadioInput
      type="radio"
      id="büyük"
      value="büyük"
      checked={size === 'büyük'}
      onChange={(e) => setSize(e.target.value)}
    />
    <label htmlFor="büyük">Büyük</label>
  </RadioButtonContainer>
</RadioGroup>

<SelectGroup>
  <label htmlFor="dough">
    <RedStar>*</RedStar> Hamur Seç
  </label>
  <CustomSelect
    id="dough"
    value={dough}
    onChange={(e) => setDough(e.target.value)}
  >
    <option value="">Hamur Türü Seçin</option>
    <option value="ince">İnce</option>
    <option value="kalın">Kalın</option>
  </CustomSelect>
</SelectGroup>
        </SelectionContainer>

        <SectionTitle>Ek Malzemeler</SectionTitle>
        <InfoText>En Fazla 10 malzeme seçebilirsiniz. 5₺</InfoText>

        <CheckboxGroup>
          {[
            'Pepperoni',
            'Sosis',
            'Kanada Jambonu',
            'Tavuk Izgara',
            'Soğan',
            'Domates',
            'Mısır',
            'Sucuk',
            'Jalepeno',
            'Sarımsak',
            'Biber',
            'Ananas',
            'Kabak',
          ].map((item) => (
            <CheckboxLabel>
  <CheckboxInput type="checkbox" value={item} onChange={handleExtrasChange} />
  {item.charAt(0).toUpperCase() + item.slice(1)} - 5₺
</CheckboxLabel>
          ))}
        </CheckboxGroup>

        <div>
        <Label for="nameInput" className="fw-bold text-primary">
        Adınızı Girin
      </Label>
      <Input
        id="nameInput"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Adınızı girin"
        bsSize="lg" // Daha büyük bir input alanı için
        className="border-primary shadow-sm"
      />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        </div>

        <h3>Sipariş Notu</h3>
        <Textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Sipariş notunuzu buraya yazın..."
        />

        <Divider />

        <QuantityControl>
          <QuantityButton onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</QuantityButton>
          {quantity}
          <QuantityButton onClick={() => setQuantity(quantity + 1)}>+</QuantityButton>
        </QuantityControl>

        
        <EndSection>  
        <TotalOrder>Sipariş Toplamı</TotalOrder>
        <SelectionsText>
            Seçimler {extras.length * 5}₺
          </SelectionsText>
          <TotalPrice>Toplam {calculateTotal()}₺</TotalPrice>
        
        <ButtonContainer>
        <Button
          color="primary"
          size="lg"
          style={{
          backgroundColor: '#fbc02d',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1.2rem',
    }}
    onClick={handleSubmit}
  >
    SİPARİŞ VER
  </Button>
</ButtonContainer>
</EndSection>
      </Section>
      <Footer />
    </Container>
    
  );
}

export default SiparisFormu;
