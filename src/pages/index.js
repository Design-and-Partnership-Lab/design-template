import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

//This is the component for the entire page.
export default function Home({ isLoading, children, setLoading }) {
  return (
    <div className="grid h-[100vh] w-[100vw] grid-cols-[1fr] grid-rows-[30px_1fr_30px]">
      <div className="grid h-[100vh] w-[100vw] grid-cols-[1fr_9fr] overflow-hidden">
        <div className="bg-edsightnavy-300 pt-6">
          <Sidebar setLoading={setLoading} />
        </div>
        <div className="p-5 pt-0 overflow-y-auto">
          <div className="flex flex-col space-y-4 m-16 text-3xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Placerat duis ultricies lacus sed turpis tincidunt id aliquet
              risus. Consequat id porta nibh venenatis cras sed felis eget
              velit. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. At
              augue eget arcu dictum. Viverra orci sagittis eu volutpat odio
              facilisis mauris sit. Parturient montes nascetur ridiculus mus
              mauris vitae ultricies leo integer. Nec sagittis aliquam malesuada
              bibendum arcu. Nibh nisl condimentum id venenatis a. Feugiat in
              fermentum posuere urna nec tincidunt. Mi in nulla posuere
              sollicitudin aliquam ultrices sagittis. In tellus integer feugiat
              scelerisque varius morbi enim nunc. Ullamcorper a lacus vestibulum
              sed arcu non odio.{" "}
            </p>
            <p>
              Volutpat consequat mauris nunc congue nisi vitae suscipit. Sociis
              natoque penatibus et magnis dis parturient montes. Lacus sed
              turpis tincidunt id aliquet. Egestas sed tempus urna et. Purus in
              massa tempor nec feugiat nisl pretium fusce. Mauris sit amet massa
              vitae tortor condimentum lacinia. Pulvinar sapien et ligula
              ullamcorper malesuada proin libero. Dolor sit amet consectetur
              adipiscing. Non diam phasellus vestibulum lorem sed risus
              ultricies tristique. Sagittis vitae et leo duis ut diam. Orci
              nulla pellentesque dignissim enim sit amet. Aliquet nec
              ullamcorper sit amet risus nullam eget felis eget. Faucibus nisl
              tincidunt eget nullam. Elit pellentesque habitant morbi tristique.
              Feugiat in ante metus dictum at tempor. Tincidunt dui ut ornare
              lectus sit. Quis blandit turpis cursus in. Varius duis at
              consectetur lorem donec. Mi tempus imperdiet nulla malesuada.
            </p>
            <p>
              Bibendum neque egestas congue quisque egestas. Magnis dis
              parturient montes nascetur. Purus gravida quis blandit turpis
              cursus in hac habitasse. Non sodales neque sodales ut etiam sit
              amet. Quisque non tellus orci ac auctor augue. Nascetur ridiculus
              mus mauris vitae ultricies. Enim nulla aliquet porttitor lacus.
              Dictum non consectetur a erat nam at lectus urna duis. Leo vel
              fringilla est ullamcorper eget nulla. Et malesuada fames ac turpis
              egestas. Ut sem viverra aliquet eget sit amet tellus cras
              adipiscing. Pharetra convallis posuere morbi leo urna molestie.
              Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.
              Tempor orci dapibus ultrices in iaculis nunc sed augue lacus.
              Venenatis urna cursus eget nunc scelerisque viverra mauris in
              aliquam. Turpis in eu mi bibendum neque. Dignissim convallis
              aenean et tortor at risus viverra adipiscing. Condimentum id
              venenatis a condimentum vitae sapien pellentesque habitant morbi.
              Pretium aenean pharetra magna ac placerat. Sed enim ut sem
              viverra.
            </p>
            <p>
              Pulvinar pellentesque habitant morbi tristique senectus et netus
              et malesuada. Donec pretium vulputate sapien nec sagittis aliquam.
              Facilisi morbi tempus iaculis urna id volutpat lacus. Integer
              malesuada nunc vel risus commodo viverra maecenas. Sapien faucibus
              et molestie ac feugiat sed. Et malesuada fames ac turpis egestas
              sed tempus. Sed lectus vestibulum mattis ullamcorper velit. Arcu
              bibendum at varius vel pharetra vel. Justo eget magna fermentum
              iaculis. Pulvinar neque laoreet suspendisse interdum consectetur
              libero id faucibus nisl. Nibh sit amet commodo nulla facilisi.
              Tempus iaculis urna id volutpat. Sociis natoque penatibus et
              magnis. Gravida dictum fusce ut placerat orci nulla pellentesque
              dignissim. In fermentum posuere urna nec.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
