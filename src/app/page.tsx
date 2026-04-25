import LoboCard from "@/components/Lobo-Card";
import About from "./_components/About";
import Hero from "./_components/Hero";
import Values from "./_components/Values";

export default function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Values/>
            <LoboCard
                nome="Luna"
                idade="3 anos"
                imagem="http://dummyimage.com/706x483.png/5fa2dd/ffffff"
                adotado = {true}
                adotadoPor="Rafael Carrilho"
                direction="left"
                descricao="Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi."
            />
            <LoboCard
                nome="Luna"
                idade="3 anos"
                imagem="http://dummyimage.com/706x483.png/5fa2dd/ffffff"
                adotado = {false}
                adotadoPor="Rafael Carrilho"
                direction="right"
                descricao="Texto do lobo..."
            />
        </>
    );
}
