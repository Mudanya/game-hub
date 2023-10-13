import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {
    onSubmit:(search:string) => void
}
const SearchInput = ({onSubmit}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
	return (
		<form onSubmit={(event) => {
            event.preventDefault()
            if(inputRef.current) onSubmit(inputRef.current.value)
        }}>
			<InputGroup>
				<InputLeftElement>
					<BiSearch />
				</InputLeftElement>
				<Input
                    ref={inputRef}
					variant="filled"
					placeholder="Search Games..."
					borderRadius={"20px"}
				/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
