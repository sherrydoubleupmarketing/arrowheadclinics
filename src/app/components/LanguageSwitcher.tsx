import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import DownArrow from "../../../public/svg/DownArrow";
import { useState, useEffect, useRef } from "react";

type Language = {
  value: string;
  label: string;
  src: string;
};

const languages: Language[] = [
  { value: "en", label: "EN", src: "/EN.png" },
  { value: "es", label: "ES", src: "/ES.png" },
];

const LanguageSwitcher = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectLang, setSelectLang] = useState<Language>({
    value: "en",
    label: "EN",
    src: "/EN.png",
  });

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentLocale = pathname.split("/")[1];
    const currentLang = languages.find((lang) => lang.value === currentLocale);
    if (currentLang) {
      setSelectLang(currentLang);
    }
  }, [pathname]);

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPathname = segments.join("/");
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries())
    );

    router.push(`${newPathname}?${currentParams.toString()}`);
  };

  // Filter out the currently selected language from the dropdown
  const unselectedLanguages = languages.filter(
    (lang) => lang.value !== selectLang.value
  );

  const onChangeLanguage = (selectedLang: Language) => {
    setSelectLang(selectedLang);
    changeLanguage(selectedLang.value);
    setShowDropdown(false); // Close the dropdown after selection
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="absolute right-3 sm:right-10 top-10 sm:top-auto"
      ref={dropdownRef}
    >
      <div
        className="flex gap-1 items-center cursor-pointer relative"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <button>
          <Image
            src={selectLang.src}
            alt={`${selectLang.label} image`}
            width={30}
            height={30}
          />
        </button>
        <p className="">{selectLang.label}</p>
        <span>
          <DownArrow />
        </span>
      </div>
      {showDropdown && (
        <div className="flex flex-col gap-2 absolute mt-2 border-3 border-black p-1 border">
          {unselectedLanguages.map((item) => (
            <div
              key={item.value}
              className="flex gap-1 items-center cursor-pointer"
              onClick={() => onChangeLanguage(item)}
            >
              <button>
                <Image
                  src={item.src}
                  alt={`${item.label} image`}
                  width={30}
                  height={30}
                />
              </button>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
