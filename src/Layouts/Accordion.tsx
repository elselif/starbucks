import { Fragment, SetStateAction, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 1 : value);
  };

  return (
    <>
      <div className="bg-white">
        <Fragment>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />} onClick={() => handleOpen(1)}>
            <AccordionHeader className="px-10 py-16 text-2xl font-normal">Hakkımızda</AccordionHeader>
            <AccordionBody className="pl-12 text-sm font-bold w-[100%] h-[100%] text-left text-gray-500">
              <a href="" className="flex">Tarihçe</a> <br /><hr />
              <a href="" className="flex mt-5">Şirketimiz</a> <br /><hr />
              <a href="" className="flex mt-5">Mağazalarımız</a> <br /><hr />
            </AccordionBody>

          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />} onClick={() => handleOpen(2)}>
            <AccordionHeader className="px-10 py-16 text-2xl font-normal">Kahve</AccordionHeader>
            <AccordionBody className="pl-12 text-sm font-bold w-[100%] h-[100%] text-left text-gray-500"  >
              <a href="" className="flex">Starbucks Reserve</a> <br /><hr />
              <a href="" className="flex mt-7">Kahve Tedariği & Kavurma & Harmanlama</a> <br /><hr />
              <a href="" className="flex mt-7">Kavurma Profiline Göre Kahveler</a> <br /><hr />
              <a href="" className="flex mt-7">Nasıl Mükemmel Kahve Hazırlanır</a><br /><hr />
              <a href="" className="flex mt-7">Kahve SSS</a><br /><hr />
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />} onClick={() => handleOpen(3)}>
            <AccordionHeader className="px-10 py-16 text-2xl font-normal">Sosyal Sorumluluk</AccordionHeader>
            <AccordionBody className="pl-12 text-sm font-bold w-[100%] h-[100%] text-left text-gray-500"  >
              <a href="" className="flex">Etik ticaret</a> <br /><hr />
              <a href="" className="flex mt-7">Topluma katkı</a> <br /><hr />
              <a href="" className="flex mt-7">Çevre</a> <br /><hr />
              <a href="" className="flex mt-7">Çeşitlilik</a><br /><hr />
              <a href="" className="flex mt-7">Sürdürülebilirlik</a><br /><hr />
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} icon={<Icon id={1} open={open} />} onClick={() => handleOpen(4)}>
            <AccordionHeader className="px-10 py-16 text-2xl font-normal">Starbucks Delivers</AccordionHeader>
            <AccordionBody className="pl-12 text-sm font-bold w-[100%] h-[100%] text-left text-gray-500"  >
              <a href="" className="flex">Yemek Sepeti</a> <br /><hr />
              <a href="" className="flex mt-7">Getir</a> <br /><hr />
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </>
  );
}