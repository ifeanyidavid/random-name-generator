// Name interface
export interface PayloadInterface {
    id: string;
    text: string;
}

// Name creation form interface
export interface AppFormInterface {
    names: PayloadInterface[];
    handleNameCreate: (name: PayloadInterface) => void;
}

// Names list interface
export interface DataListInterface {
    /* handleNameUpdate: (
      event: React.ChangeEvent<HTMLInputElement>,
      id: string
    ) => void; */
    handleNameRemove: (id: string) => void;
    // handleNameComplete: (id: string) => void;
    // handleInputBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    names: PayloadInterface[];
}

// Name item interface
export interface ListItemInterface {
    /* handleNameUpdate: (
        event: React.ChangeEvent<HTMLInputElement>,
        id: string
    ) => void; */
    handleNameRemove: (id: string) => void;
    // handleNameComplete: (id: string) => void;
    // handleInputBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: PayloadInterface;
}

export interface RandomNameInterface {
    getRandomName: () => void;
}
